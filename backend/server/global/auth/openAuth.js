import { CustomError } from '../helpers/customError.js';
import { OAuth2Client } from 'google-auth-library';
import { Authentication } from './authentication.js';
import { ENVIRONMENT, CLIENT_ID, CLIENT_SECRET } from '../utils/config.js';

export class GoogleOpenAuth {

    constructor({ usersModel }) {
        this.usersModel = usersModel;
        this.authenticator = new Authentication({ usersModel });
        this.googleClient = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
    }

    async signWithGoogleID(data, res, next) {
       
        if(ENVIRONMENT === 'test') return this.fakeSignOAuth(data, res);

        const { tokens } = await this.googleClient.getToken({ 
            code: data.code,
            redirect_uri: 'http://localhost:3001'
        });
    
        if(!tokens.id_token) return next(new CustomError('Could not get Google ID Token', 500));

        const ticket = await this.googleClient.verifyIdToken({
            idToken: tokens.id_token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        
        if(!payload) return next(new CustomError('Could not get Google Data Payload', 500));
        if(!payload.name) return next(new CustomError('Could not get Google Email Name', 500));
        if(!payload.email) return next(new CustomError('Could not get Google Email Address', 500));

        const userData = {
            id:       payload.sub,
            email:    payload.email, 
            author:   payload.name.replace(/\s/g, "-") + '_' + Math.random().toString(36).substring(2, 10), 
            name:     payload.name.replace(/\s/g, "-") + '_' + Math.random().toString(36).substring(2, 10), 
            password: Math.random().toString(36).substring(7),
            auth_provider: data.auth_provider,
            external_id: payload.sub
        };

        const result = await this.usersModel.getByExternalID({
            auth_provider: data.auth_provider,
            external_id: userData.id
        });

        if(result.length > 0) {
            return this.authenticator.sendTokenResponse({
                res, 
                payload: { id: result[0].id }, 
                message: 'User validated successfully'
            });
        }

        const emailResult = await this.usersModel.getByEmail({ email: userData.email });

        if(emailResult.length > 0) {
            await this.usersModel.changeExternalID(userData);

            return this.authenticator.sendTokenResponse({
                res, 
                payload: { id: emailResult[0].id }, 
                message: 'User validated successfully'
            });
        }

        return this.authenticator.registerHash(userData, res);
    }  
    
    async fakeSignOAuth(data, res) {
       
        const userData = {
            id:        data.code,
            author:   'Fake email author name', 
            email:    'Fake email address', 
            name:     'Fake email name', 
            password:  Math.random().toString(36).substring(7),
            auth_provider: data.auth_provider,
            external_id: data.code
        };

        const result = await this.usersModel.getByExternalID({
            auth_provider: data.auth_provider,
            external_id: userData.id
        });

        if(result.length > 0) {
            return this.authenticator.sendTokenResponse({
                res, 
                payload: { id: result[0].id }, 
                message: 'User validated successfully'
            });
        }

        return this.authenticator.registerHash(userData, res);
    }
}
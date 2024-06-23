import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { ENVIRONMENT, JWT_EXPIRE, SECRET_KEY } from '../utils/config.js';
import { createOkResponse, createErrorResponse } from '../utils/responses.js';

export class Authentication {
    
    constructor({ usersModel }) {
        this.usersModel = usersModel;
        this.saltRounds = ENVIRONMENT === 'production' ? 10 : 1;
    }

    sendTokenResponse({ payload, res, message }) {
        const token = sign(payload, SECRET_KEY, {
            expiresIn: JWT_EXPIRE
        });

        return res
            .status(201)
            .cookie('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60,
                secure: ENVIRONMENT === 'production'
            })
            .json(createOkResponse({ message }));
    }

    async overwriteHash(data, res) {
        
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hashPassword = await bcrypt.hash(data.password, salt);

        await this.usersModel.changePassword({ id: data.id, password: hashPassword });

        return this.sendTokenResponse({
            res, 
            payload: { id: data.id }, 
            message: 'User password changed successfully'
        });
    }

    async registerHash(data, res) {

        const salt = await bcrypt.genSalt(this.saltRounds);
        const hashPassword = await bcrypt.hash(data.password, salt);
       
        const newData = {
            ...data,
            password: hashPassword
        };

        const result = await this.usersModel.addNew(newData);
        
        return this.sendTokenResponse({
            res, 
            payload: { id: result.insertId }, 
            message: 'User registered successfully'
        });
    }

    async compareHash(data, res) {

        const isPassowordMatched = await bcrypt.compare(
            data.inputPassword,
            data.modelPassword 
        );

        if(!isPassowordMatched) {
            return res.status(401).json(createErrorResponse({
                message: 'Incorrect password'
            }));
        }
        
        return this.sendTokenResponse({
            res, 
            payload: { id: data.modelId }, 
            message: 'User validated successfully'
        });
    }
}
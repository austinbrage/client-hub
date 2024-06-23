import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../utils/config.js';
import { CustomError } from '../helpers/customError.js';

export class Authorization {

    async authMiddleware(req, _res, next) {
        const authContent = req.headers.authorization;
        const token = authContent ? authContent.split(' ')[1] : req.cookies.token;

        if(!token) return next(new CustomError('Unauthorized, please login', 401));
    
        try {
            const verifyUser = verify(token, SECRET_KEY);

            if(!verifyUser?.id || isNaN(verifyUser?.id)) {
                return next(new CustomError('Token does not contain a valid user ID', 401));
            }

            req.userId = { id: verifyUser.id };
            
            next();
        } catch(err) {
            return next(new CustomError('Invalid Token', 401));
        }
    }
}
import { UsersValidation } from './users.validations.js';
import { GoogleOpenAuth } from '../../global/auth/openAuth.js';
import { Authentication } from '../../global/auth/authentication.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class UsersController {

    constructor({ usersModel }) {
        this.usersModel = usersModel;
        this.validateUsers = new UsersValidation();
        this.authenticator = new Authentication({ usersModel });
        this.googleAuthenticator = new GoogleOpenAuth({ usersModel });
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getByEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getByEmail(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getByEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByEmail in users executed successfully',
            data
        }));
    })

    getByExternalId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getByExternalId(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getByExternalId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByExternalId in users executed successfully',
            data
        }));
    })

    getAll = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getAll(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getAll(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAll in users executed successfully',
            data
        }));
    })

    getIdPassword = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getIdPassword(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getIdPassword(validation.data);

        if(data.length === 0) {
            return res.status(401).json(createErrorResponse({
                message: 'Incorrect username'
            }));
        }

        const compareHashData = {
            modelId: data[0].id,
            modelPassword: data[0].password,
            inputPassword: validation.data.password
        };

        return this.authenticator.compareHash(compareHashData, res);
    })

    getName = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getName(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getName(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getName in users executed successfully',
            data
        }));
    })

    getEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getEmail(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getEmail in users executed successfully',
            data
        }));
    })

    getAuthor = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.getAuthor(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.getAuthor(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAuthor in users executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const name = await this.usersModel.getName(validation.data);
        const email = await this.usersModel.getEmail(validation.data);
        const author = await this.usersModel.getAuthor(validation.data);

        if(name.length !== 0) {
            return res.status(401).json(createErrorResponse({
                message: 'Existing username'
            }));
        }

        if(email.length !== 0) {
            return res.status(401).json(createErrorResponse({
                message: 'Existing email'
            }));
        }

        if(author.length !== 0) {
            return res.status(401).json(createErrorResponse({
                message: 'Existing author'
            }));
        }

        const completeData = {
            ...validation.data,
            auth_provider: null,
            external_id: null
        };
        
        return this.authenticator.registerHash(completeData, res);
    })

    changeExternalId = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeExternalId(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeExternalId(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeExternalId in users executed successfully',
            data: [data]
        }));
    })

    changeName = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeName(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeName(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeName in users executed successfully',
            data: [data]
        }));
    })

    changePassword = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changePassword(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        return this.authenticator.overwriteHash(validation.data, res);
    })

    changeAuthor = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeAuthor(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeAuthor(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeAuthor in users executed successfully',
            data: [data]
        }));
    })

    changeEmail = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.changeEmail(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.changeEmail(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeEmail in users executed successfully',
            data: [data]
        }));
    })

    openAuth = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.openAuth(req.body);

        if(!validation.success) return this.validationErr(res, validation.error);

        if(validation.data.auth_provider !== 'google') {
            return res.status(401).json(createErrorResponse({
                message: 'OAuth Provider not handled by the API'
            }));
        }

        return this.authenticator.signWithGoogleID(validation.data, res);
    });

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateUsers.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.usersModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in users executed successfully',
            data: [data]
        }));
    })

}

export default UsersController;
import { MaterialsValidation } from './materials.validations.js';
import { asyncErrorHandler } from './../../global/handlers/asyncError.js';
import { createOkResponse, createErrorResponse } from './../../global/utils/responses.js';

class MaterialsController {

    constructor({ materialsModel }) {
        this.materialsModel = materialsModel;
        this.validateMaterials = new MaterialsValidation();
    }

    validationErr(res, validationError) {
        return res.status(400).json(createErrorResponse({
            message: 'Validation data error',
            error: validationError.format()
        }));
    }

    getAll = asyncErrorHandler(async (_req, res) => {
        const data = await this.materialsModel.getAll();

        return res.status(200).json(createOkResponse({
            message: 'getAll in materials executed successfully',
            data
        }));
    })

    getAllByJob = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.getAllByJob(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.getAllByJob(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByJob in materials executed successfully',
            data
        }));
    })

    getAllByProcess = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.getAllByProcess(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.getAllByProcess(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getAllByProcess in materials executed successfully',
            data
        }));
    })

    getByTitle = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.getByTitle(req.query);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.getByTitle(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getByTitle in materials executed successfully',
            data
        }));
    })

    getIdByJob = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.getIdByJob(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.getIdByJob(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getIdByJob in materials executed successfully',
            data
        }));
    })

    getIdByProcess = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.getIdByProcess(req.sanitizedData);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.getIdByProcess(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'getIdByProcess in materials executed successfully',
            data
        }));
    })

    addNew = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.addNew(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.addNew(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'addNew in materials executed successfully',
            data: [data]
        }));
    })

    changeData = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.changeData(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.changeData(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'changeData in materials executed successfully',
            data: [data]
        }));
    })

    remove = asyncErrorHandler(async (req, res) => {
        const validation = this.validateMaterials.remove(req.body);

        if (!validation.success) return this.validationErr(res, validation.error);

        const data = await this.materialsModel.remove(validation.data);

        return res.status(200).json(createOkResponse({
            message: 'remove in materials executed successfully',
            data: [data]
        }));
    })

}

export default MaterialsController;
import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { MaterialsValidations } from "./materials.validations.js";

export class Materials {

   constructor({ timeout = 5000 }) {
      const baseURL = `${API_URL}${PATHS.MATERIALS}`;

      this.fetchMaterials = axios.create({ baseURL, timeout });
      this.validateMaterials = new MaterialsValidations();
   }

   getAll = async () => {
      const response = await this.fetchMaterials.get('/getAll');
      return response.data;
   }

   getAllByJob = async (args) => {
      const validation = this.validateMaterials.getAllByJob(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.get('/getAllByJob', { params: validation.data });
      return response.data;
   }

   getAllByProcess = async (args) => {
      const validation = this.validateMaterials.getAllByProcess(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.get('/getAllByProcess', { params: validation.data });
      return response.data;
   }

   getByTitle = async (args) => {
      const validation = this.validateMaterials.getByTitle(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.get('/getByTitle', { params: validation.data });
      return response.data;
   }

   getIdByJob = async (args) => {
      const validation = this.validateMaterials.getIdByJob(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.get('/getIdByJob', { params: validation.data });
      return response.data;
   }

   getIdByProcess = async (args) => {
      const validation = this.validateMaterials.getIdByProcess(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.get('/getIdByProcess', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateMaterials.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.post('/addNew', validation.data);
      return response.data;
   }

   changeData = async (args) => {
      const validation = this.validateMaterials.changeData(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.put('/changeData', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateMaterials.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMaterials.delete('/remove', { data: validation.data });
      return response.data;
   }
}
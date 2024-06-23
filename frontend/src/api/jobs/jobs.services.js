import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { JobsValidations } from "./jobs.validations.js";

export class Jobs {

   constructor({ timeout } = { timeout: 5000 }) {
      const baseURL = `${API_URL}${PATHS.JOBS}`;

      this.fetchJobs = axios.create({ baseURL, timeout });
      this.validateJobs = new JobsValidations();
   }

   getAll = async () => {
      const response = await this.fetchJobs.get('/getAll');
      return response.data;
   }

   getAllByClient = async (args) => {
      const validation = this.validateJobs.getAllByClient(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.get('/getAllByClient', { params: validation.data });
      return response.data;
   }

   getByTitle = async (args) => {
      const validation = this.validateJobs.getByTitle(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.get('/getByTitle', { params: validation.data });
      return response.data;
   }

   getId = async (args) => {
      const validation = this.validateJobs.getId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.get('/getId', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateJobs.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.post('/addNew', validation.data);
      return response.data;
   }

   changeData = async (args) => {
      const validation = this.validateJobs.changeData(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.put('/changeData', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateJobs.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchJobs.delete('/remove', { data: validation.data });
      return response.data;
   }
}
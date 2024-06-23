import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { ProcessesValidations } from "./processes.validations.js";

export class Processes {

   constructor({ timeout } = { timeout: 5000 }) {
      const baseURL = `${API_URL}${PATHS.PROCESSES}`;

      this.fetchProcesses = axios.create({ baseURL, timeout });
      this.validateProcesses = new ProcessesValidations();
   }

   getAll = async () => {
      const response = await this.fetchProcesses.get('/getAll');
      return response.data;
   }

   getAllByJob = async (args) => {
      const validation = this.validateProcesses.getAllByJob(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.get('/getAllByJob', { params: validation.data });
      return response.data;
   }

   getByTitle = async (args) => {
      const validation = this.validateProcesses.getByTitle(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.get('/getByTitle', { params: validation.data });
      return response.data;
   }

   getId = async (args) => {
      const validation = this.validateProcesses.getId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.get('/getId', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateProcesses.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.post('/addNew', validation.data);
      return response.data;
   }

   changeData = async (args) => {
      const validation = this.validateProcesses.changeData(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.put('/changeData', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateProcesses.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchProcesses.delete('/remove', { data: validation.data });
      return response.data;
   }
}
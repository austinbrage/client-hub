import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { ClientsValidations } from "./clients.validations.js";

export class Clients {

   constructor({ timeout = 5000 }) {
      const baseURL = `${API_URL}${PATHS.CLIENTS}`;

      this.fetchClients = axios.create({ baseURL, timeout });
      this.validateClients = new ClientsValidations();
   }

   getAll = async () => {
      const response = await this.fetchClients.get('/getAll');
      return response.data;
   }

   getAllByUser = async (args) => {
      const validation = this.validateClients.getAllByUser(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.get('/getAllByUser', { params: validation.data });
      return response.data;
   }

   getByName = async (args) => {
      const validation = this.validateClients.getByName(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.get('/getByName', { params: validation.data });
      return response.data;
   }

   getId = async (args) => {
      const validation = this.validateClients.getId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.get('/getId', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateClients.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.post('/addNew', validation.data);
      return response.data;
   }

   changeData = async (args) => {
      const validation = this.validateClients.changeData(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.put('/changeData', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateClients.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchClients.delete('/remove', { data: validation.data });
      return response.data;
   }
}
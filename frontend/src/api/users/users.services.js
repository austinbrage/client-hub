import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { UsersValidations } from "./users.validations.js";

export class Users {

   constructor({ timeout } = { timeout: 5000 }) {
      const baseURL = `${API_URL}${PATHS.USERS}`;

      this.fetchUsers = axios.create({ baseURL, timeout });
      this.validateUsers = new UsersValidations();
   }

   getId = async (args) => {
      const validation = this.validateUsers.getId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getId', { params: validation.data });
      return response.data;
   }

   getByEmail = async (args) => {
      const validation = this.validateUsers.getByEmail(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getByEmail', { params: validation.data });
      return response.data;
   }

   getByExternalId = async (args) => {
      const validation = this.validateUsers.getByExternalId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getByExternalId', { params: validation.data });
      return response.data;
   }

   getAll = async (args) => {
      const validation = this.validateUsers.getAll(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getAll', { params: validation.data });
      return response.data;
   }

   getMembership = async (args) => {
      const validation = this.validateUsers.getMembership(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getMembership', { params: validation.data });
      return response.data;
   }

   getIdPassword = async (args) => {
      const validation = this.validateUsers.getIdPassword(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getIdPassword', { params: validation.data });
      return response.data;
   }

   getName = async (args) => {
      const validation = this.validateUsers.getName(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getName', { params: validation.data });
      return response.data;
   }

   getEmail = async (args) => {
      const validation = this.validateUsers.getEmail(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getEmail', { params: validation.data });
      return response.data;
   }

   getAuthor = async (args) => {
      const validation = this.validateUsers.getAuthor(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.get('/getAuthor', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateUsers.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.post('/addNew', validation.data);
      return response.data;
   }

   changeExternalId = async (args) => {
      const validation = this.validateUsers.changeExternalId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.put('/changeExternalId', validation.data);
      return response.data;
   }

   changeName = async (args) => {
      const validation = this.validateUsers.changeName(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.put('/changeName', validation.data);
      return response.data;
   }

   changePassword = async (args) => {
      const validation = this.validateUsers.changePassword(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.put('/changePassword', validation.data);
      return response.data;
   }

   changeAuthor = async (args) => {
      const validation = this.validateUsers.changeAuthor(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.put('/changeAuthor', validation.data);
      return response.data;
   }

   changeEmail = async (args) => {
      const validation = this.validateUsers.changeEmail(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.put('/changeEmail', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateUsers.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchUsers.delete('/remove', { data: validation.data });
      return response.data;
   }
}
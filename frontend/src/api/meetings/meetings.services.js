import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";
import { ValidationError } from "../../helpers/ValidationError.js";
import { MeetingsValidations } from "./meetings.validations.js";

export class Meetings {

   constructor({ timeout = 5000 }) {
      const baseURL = `${API_URL}${PATHS.MEETINGS}`;

      this.fetchMeetings = axios.create({ baseURL, timeout });
      this.validateMeetings = new MeetingsValidations();
   }

   getAll = async () => {
      const response = await this.fetchMeetings.get('/getAll');
      return response.data;
   }

   getAllByClient = async (args) => {
      const validation = this.validateMeetings.getAllByClient(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.get('/getAllByClient', { params: validation.data });
      return response.data;
   }

   getByTitle = async (args) => {
      const validation = this.validateMeetings.getByTitle(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.get('/getByTitle', { params: validation.data });
      return response.data;
   }

   getId = async (args) => {
      const validation = this.validateMeetings.getId(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.get('/getId', { params: validation.data });
      return response.data;
   }

   addNew = async (args) => {
      const validation = this.validateMeetings.addNew(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.post('/addNew', validation.data);
      return response.data;
   }

   changeData = async (args) => {
      const validation = this.validateMeetings.changeData(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.put('/changeData', validation.data);
      return response.data;
   }

   remove = async (args) => {
      const validation = this.validateMeetings.remove(args);
      if(!validation.success) throw new ValidationError(validation.error.issues);

      const response = await this.fetchMeetings.delete('/remove', { data: validation.data });
      return response.data;
   }
}
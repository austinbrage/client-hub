import axios from "axios";
import { PATHS, API_URL } from "../endpoints.js";

export class Healthcare {

    constructor({ timeout } = { timeout: 5000 }) {
        const baseURL = `${API_URL}${PATHS.HEALTHCARE}`;

        this.fetchHealthcare = axios.create({ baseURL, timeout });
    }

    checkApi = async () => {
        const response = await this.fetchHealthcare.get('/api');
        return response.data;
    }

    checkDatabase = async () => {
        const response = await this.fetchHealthcare.get('/database');
        return response.data;
    }

}
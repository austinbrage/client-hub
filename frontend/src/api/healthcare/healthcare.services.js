import { PATHS, API_URL } from "../endpoints.js";

export class Healthcare {

    constructor() {
        this.url = `${API_URL}${PATHS.HEALTHCARE}`;
    }

    addPath = (route, api) => {
        return `${api}${route}`;
    }

    checkApi = async () => {
        const url = new URL(this.addPath('/api', this.url));

        const options = {
            method: 'GET'                  
        }

        const response = await fetch(url, options);
        return await response.json();
    }

    checkDatabase = async () => {
        const url = new URL(this.addPath('/database', this.url));

        const options = {
            method: 'GET'                  
        }

        const response = await fetch(url, options);
        return await response.json();
    }

}
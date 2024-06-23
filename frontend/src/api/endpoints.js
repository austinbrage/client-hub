import { API, ENVIRONMENT } from "../utils/config.js";

export const API_URL = API[ENVIRONMENT];

export const PATHS = {
   HEALTHCARE: '/ping',
   CLIENTS: '/clients',
   JOBS: '/jobs',
   MATERIALS: '/materials',
   MEETINGS: '/meetings',
   PROCESSES: '/processes',
   USERS: '/users'
}

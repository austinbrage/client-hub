import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { ENVIRONMENT } from "../../global/utils/config.js";
import { CustomError } from "../../global/helpers/customError.js";
import { createOkResponse } from '../../global/utils/responses.js';

class HealthcareController {
    
    constructor({ pingPool }) {
        this.pingPool = pingPool;
    }

    getApiData() {
        const packagePath = join(dirname(fileURLToPath(import.meta.url)), '../../../package.json');
        const packageFile = readFileSync(packagePath, 'utf-8');
    
        const packageJson = JSON.parse(packageFile);

        return {
            currentEnvironment: ENVIRONMENT,
            apiName: packageJson?.name ?? 'no name available',
            apiVersion: packageJson?.version ?? 'no version available'
        }
    }

    checkApi = (_req, res) => {   
        res.status(200).send(createOkResponse({
            message: 'pong',
            data: this.getApiData()
        }));
    }

    checkDatabase = async (_req, res, next) => {
        let connection;
        const startTime = Date.now();

        try {
            connection = await this.pingPool.getConnection();
            await connection?.query('SELECT 1');
            
            const endTime = Date.now();
            const connectionTime = endTime - startTime;

            res.status(200).send(createOkResponse({
                message: 'pong',
                data: {
                    ...this.getApiData(),
                    connectionTime: connectionTime + ' ms'
                }
            }));
            
        } catch(err) {
            next(new CustomError(`Database connection error (${err})`));
    
        } finally {
            connection?.release();
    
        }
    }
}

export default HealthcareController;
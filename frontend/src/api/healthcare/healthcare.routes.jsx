import * as healthcareHooks from './healthcare.hooks.js';
import { QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const healthcareSubroutes = [
    {
        path: 'api',
        name: 'api',
        element: <QueryViewerNoData useQueryHook={healthcareHooks.useHealthcareApi}/>
    },
    {
        path: 'database',
        name: 'database',
        element: <QueryViewerNoData useQueryHook={healthcareHooks.useHealthcareDatabase}/>
    }
]
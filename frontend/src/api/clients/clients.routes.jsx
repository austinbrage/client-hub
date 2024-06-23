import * as clientsHooks from './clients.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData, QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const clientsSubroutes = [
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerNoData
                useQueryHook={clientsHooks.useClientsGetAll}
            />
        )
    },
    {
        path: 'getAllByUser',
        name: 'getAllByUser',
        element: (
            <QueryViewerWithData
                useQueryHook={clientsHooks.useClientsGetAllByUser}
                initialData={{
                    user_id: 0,
                }}
            />
        )
    },
    {
        path: 'getByName',
        name: 'getByName',
        element: (
            <QueryViewerWithData
                useQueryHook={clientsHooks.useClientsGetByName}
                initialData={{
                    name: 'name value',
                }}
            />
        )
    },
    {
        path: 'getId',
        name: 'getId',
        element: (
            <QueryViewerWithData
                useQueryHook={clientsHooks.useClientsGetId}
                initialData={{
                    user_id: 0,
                    name: 'name value',
                }}
            />
        )
    },
    {
        path: 'addNew',
        name: 'addNew',
        element: (
            <MutationViewerWithData
                useMutationHook={clientsHooks.useClientsAddNew}
                initialData={{
                    user_id: 0,
                    name: 'name value',
                    contact_number: 'contact_number value',
                    contact_email: 'contact_email value',
                    description: 'description value',
                }}
            />
        )
    },
    {
        path: 'changeData',
        name: 'changeData',
        element: (
            <MutationViewerWithData
                useMutationHook={clientsHooks.useClientsChangeData}
                initialData={{
                    name: 'name value',
                    contact_number: 'contact_number value',
                    contact_email: 'contact_email value',
                    description: 'description value',
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'remove',
        name: 'remove',
        element: (
            <MutationViewerWithData
                useMutationHook={clientsHooks.useClientsRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

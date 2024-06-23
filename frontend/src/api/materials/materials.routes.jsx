import * as materialsHooks from './materials.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData, QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const materialsSubroutes = [
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerNoData
                useQueryHook={materialsHooks.useMaterialsGetAll}
            />
        )
    },
    {
        path: 'getAllByJob',
        name: 'getAllByJob',
        element: (
            <QueryViewerWithData
                useQueryHook={materialsHooks.useMaterialsGetAllByJob}
                initialData={{
                    job_id: 'could not get type of field on tables.sql',
                }}
            />
        )
    },
    {
        path: 'getAllByProcess',
        name: 'getAllByProcess',
        element: (
            <QueryViewerWithData
                useQueryHook={materialsHooks.useMaterialsGetAllByProcess}
                initialData={{
                    process_id: 'could not get type of field on tables.sql',
                }}
            />
        )
    },
    {
        path: 'getByTitle',
        name: 'getByTitle',
        element: (
            <QueryViewerWithData
                useQueryHook={materialsHooks.useMaterialsGetByTitle}
                initialData={{
                    title: 'title value',
                }}
            />
        )
    },
    {
        path: 'getIdByJob',
        name: 'getIdByJob',
        element: (
            <QueryViewerWithData
                useQueryHook={materialsHooks.useMaterialsGetIdByJob}
                initialData={{
                    job_id: 'could not get type of field on tables.sql',
                    title: 'title value',
                }}
            />
        )
    },
    {
        path: 'getIdByProcess',
        name: 'getIdByProcess',
        element: (
            <QueryViewerWithData
                useQueryHook={materialsHooks.useMaterialsGetIdByProcess}
                initialData={{
                    process_id: 'could not get type of field on tables.sql',
                    title: 'title value',
                }}
            />
        )
    },
    {
        path: 'addNew',
        name: 'addNew',
        element: (
            <MutationViewerWithData
                useMutationHook={materialsHooks.useMaterialsAddNew}
                initialData={{
                    job_id: 'could not get type of field on tables.sql',
                    process_id: 'could not get type of field on tables.sql',
                    title: 'title value',
                    description: 'description value',
                    possible_price: 'possible_price value',
                }}
            />
        )
    },
    {
        path: 'changeData',
        name: 'changeData',
        element: (
            <MutationViewerWithData
                useMutationHook={materialsHooks.useMaterialsChangeData}
                initialData={{
                    title: 'title value',
                    description: 'description value',
                    possible_price: 'possible_price value',
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
                useMutationHook={materialsHooks.useMaterialsRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

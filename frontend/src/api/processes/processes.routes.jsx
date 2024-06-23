import * as processesHooks from './processes.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData, QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const processesSubroutes = [
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerNoData
                useQueryHook={processesHooks.useProcessesGetAll}
            />
        )
    },
    {
        path: 'getAllByJob',
        name: 'getAllByJob',
        element: (
            <QueryViewerWithData
                useQueryHook={processesHooks.useProcessesGetAllByJob}
                initialData={{
                    job_id: 0,
                }}
            />
        )
    },
    {
        path: 'getByTitle',
        name: 'getByTitle',
        element: (
            <QueryViewerWithData
                useQueryHook={processesHooks.useProcessesGetByTitle}
                initialData={{
                    title: 'title value',
                }}
            />
        )
    },
    {
        path: 'getId',
        name: 'getId',
        element: (
            <QueryViewerWithData
                useQueryHook={processesHooks.useProcessesGetId}
                initialData={{
                    job_id: 0,
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
                useMutationHook={processesHooks.useProcessesAddNew}
                initialData={{
                    job_id: 0,
                    title: 'title value',
                    status: 'status value',
                    description: 'description value',
                    deadline: 'could not get type of field on tables.sql',
                }}
            />
        )
    },
    {
        path: 'changeData',
        name: 'changeData',
        element: (
            <MutationViewerWithData
                useMutationHook={processesHooks.useProcessesChangeData}
                initialData={{
                    title: 'title value',
                    status: 'status value',
                    description: 'description value',
                    deadline: 'could not get type of field on tables.sql',
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
                useMutationHook={processesHooks.useProcessesRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

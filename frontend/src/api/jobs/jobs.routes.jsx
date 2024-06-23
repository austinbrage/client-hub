import * as jobsHooks from './jobs.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData, QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const jobsSubroutes = [
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerNoData
                useQueryHook={jobsHooks.useJobsGetAll}
            />
        )
    },
    {
        path: 'getAllByClient',
        name: 'getAllByClient',
        element: (
            <QueryViewerWithData
                useQueryHook={jobsHooks.useJobsGetAllByClient}
                initialData={{
                    client_id: 0,
                }}
            />
        )
    },
    {
        path: 'getByTitle',
        name: 'getByTitle',
        element: (
            <QueryViewerWithData
                useQueryHook={jobsHooks.useJobsGetByTitle}
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
                useQueryHook={jobsHooks.useJobsGetId}
                initialData={{
                    client_id: 0,
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
                useMutationHook={jobsHooks.useJobsAddNew}
                initialData={{
                    client_id: 0,
                    title: 'title value',
                    price: 'price value',
                    status: 'status value',
                    deadline: 'deadline value',
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
                useMutationHook={jobsHooks.useJobsChangeData}
                initialData={{
                    title: 'title value',
                    price: 'price value',
                    status: 'status value',
                    deadline: 'deadline value',
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
                useMutationHook={jobsHooks.useJobsRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

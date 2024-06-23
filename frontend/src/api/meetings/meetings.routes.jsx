import * as meetingsHooks from './meetings.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData, QueryViewerNoData } from '../../components/viewers/Queries.jsx';

export const meetingsSubroutes = [
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerNoData
                useQueryHook={meetingsHooks.useMeetingsGetAll}
            />
        )
    },
    {
        path: 'getAllByClient',
        name: 'getAllByClient',
        element: (
            <QueryViewerWithData
                useQueryHook={meetingsHooks.useMeetingsGetAllByClient}
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
                useQueryHook={meetingsHooks.useMeetingsGetByTitle}
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
                useQueryHook={meetingsHooks.useMeetingsGetId}
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
                useMutationHook={meetingsHooks.useMeetingsAddNew}
                initialData={{
                    client_id: 0,
                    title: 'title value',
                    description: 'description value',
                    date_time: 'could not get type of field on tables.sql',
                }}
            />
        )
    },
    {
        path: 'changeData',
        name: 'changeData',
        element: (
            <MutationViewerWithData
                useMutationHook={meetingsHooks.useMeetingsChangeData}
                initialData={{
                    title: 'title value',
                    description: 'description value',
                    date_time: 'could not get type of field on tables.sql',
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
                useMutationHook={meetingsHooks.useMeetingsRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

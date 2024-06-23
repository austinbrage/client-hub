import * as usersHooks from './users.hooks.js';
import { MutationViewerWithData } from '../../components/viewers/Mutations.jsx';
import { QueryViewerWithData } from '../../components/viewers/Queries.jsx';

export const usersSubroutes = [
    {
        path: 'getId',
        name: 'getId',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetId}
                initialData={{
                    api_key: 'api_key value',
                }}
            />
        )
    },
    {
        path: 'getByEmail',
        name: 'getByEmail',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetByEmail}
                initialData={{
                    email: 'email value',
                }}
            />
        )
    },
    {
        path: 'getByExternalId',
        name: 'getByExternalId',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetByExternalId}
                initialData={{
                    auth_provider: 'auth_provider value',
                    external_id: 'external_id value',
                }}
            />
        )
    },
    {
        path: 'getAll',
        name: 'getAll',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetAll}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'getMembership',
        name: 'getMembership',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetMembership}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'getIdPassword',
        name: 'getIdPassword',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetIdPassword}
                initialData={{
                    name: 'name value',
                }}
            />
        )
    },
    {
        path: 'getName',
        name: 'getName',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetName}
                initialData={{
                    name: 'name value',
                }}
            />
        )
    },
    {
        path: 'getEmail',
        name: 'getEmail',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetEmail}
                initialData={{
                    email: 'email value',
                }}
            />
        )
    },
    {
        path: 'getAuthor',
        name: 'getAuthor',
        element: (
            <QueryViewerWithData
                useQueryHook={usersHooks.useUsersGetAuthor}
                initialData={{
                    author: 'author value',
                }}
            />
        )
    },
    {
        path: 'addNew',
        name: 'addNew',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersAddNew}
                initialData={{
                    name: 'name value',
                    password: 'password value',
                    email: 'email value',
                    author: 'author value',
                    auth_provider: 'auth_provider value',
                    external_id: 'external_id value',
                }}
            />
        )
    },
    {
        path: 'changeExternalId',
        name: 'changeExternalId',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersChangeExternalId}
                initialData={{
                    auth_provider: 'auth_provider value',
                    external_id: 'external_id value',
                    email: 'email value',
                }}
            />
        )
    },
    {
        path: 'changeName',
        name: 'changeName',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersChangeName}
                initialData={{
                    name: 'name value',
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'changePassword',
        name: 'changePassword',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersChangePassword}
                initialData={{
                    password: 'password value',
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'changeAuthor',
        name: 'changeAuthor',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersChangeAuthor}
                initialData={{
                    author: 'author value',
                    id: 0,
                }}
            />
        )
    },
    {
        path: 'changeEmail',
        name: 'changeEmail',
        element: (
            <MutationViewerWithData
                useMutationHook={usersHooks.useUsersChangeEmail}
                initialData={{
                    email: 'email value',
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
                useMutationHook={usersHooks.useUsersRemove}
                initialData={{
                    id: 0,
                }}
            />
        )
    },
    
]

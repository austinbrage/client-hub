import { Users } from './users.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const usersService = new Users();


export const useUsersGetId = (args) => useQueryHook({
    queryKey: ['users', 'getId', args],
    queryFn: () => usersService.getId(args)
});

export const useUsersGetByEmail = (args) => useQueryHook({
    queryKey: ['users', 'getByEmail', args],
    queryFn: () => usersService.getByEmail(args)
});

export const useUsersGetByExternalId = (args) => useQueryHook({
    queryKey: ['users', 'getByExternalId', args],
    queryFn: () => usersService.getByExternalId(args)
});

export const useUsersGetAll = (args) => useQueryHook({
    queryKey: ['users', 'getAll', args],
    queryFn: () => usersService.getAll(args)
});

export const useUsersGetMembership = (args) => useQueryHook({
    queryKey: ['users', 'getMembership', args],
    queryFn: () => usersService.getMembership(args)
});

export const useUsersGetIdPassword = (args) => useQueryHook({
    queryKey: ['users', 'getIdPassword', args],
    queryFn: () => usersService.getIdPassword(args)
});

export const useUsersGetName = (args) => useQueryHook({
    queryKey: ['users', 'getName', args],
    queryFn: () => usersService.getName(args)
});

export const useUsersGetEmail = (args) => useQueryHook({
    queryKey: ['users', 'getEmail', args],
    queryFn: () => usersService.getEmail(args)
});

export const useUsersGetAuthor = (args) => useQueryHook({
    queryKey: ['users', 'getAuthor', args],
    queryFn: () => usersService.getAuthor(args)
});

export const useUsersAddNew = () => useMutationHook({
    mutationKey: ['users', 'addNew'],
    mutationFn: usersService.addNew,
    invalidateQueries: [['users']]
});

export const useUsersChangeExternalId = () => useMutationHook({
    mutationKey: ['users', 'changeExternalId'],
    mutationFn: usersService.changeExternalId,
    invalidateQueries: [['users']]
});

export const useUsersChangeName = () => useMutationHook({
    mutationKey: ['users', 'changeName'],
    mutationFn: usersService.changeName,
    invalidateQueries: [['users']]
});

export const useUsersChangePassword = () => useMutationHook({
    mutationKey: ['users', 'changePassword'],
    mutationFn: usersService.changePassword,
    invalidateQueries: [['users']]
});

export const useUsersChangeAuthor = () => useMutationHook({
    mutationKey: ['users', 'changeAuthor'],
    mutationFn: usersService.changeAuthor,
    invalidateQueries: [['users']]
});

export const useUsersChangeEmail = () => useMutationHook({
    mutationKey: ['users', 'changeEmail'],
    mutationFn: usersService.changeEmail,
    invalidateQueries: [['users']]
});

export const useUsersRemove = () => useMutationHook({
    mutationKey: ['users', 'remove'],
    mutationFn: usersService.remove,
    invalidateQueries: [['users']]
});


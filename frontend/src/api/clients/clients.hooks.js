import { Clients } from './clients.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const clientsService = new Clients();


export const useClientsGetAll = () => useQueryHook({
    queryKey: ['clients', 'getAll'],
    queryFn: clientsService.getAll
});

export const useClientsGetAllByUser = (args) => useQueryHook({
    queryKey: ['clients', 'getAllByUser', args],
    queryFn: () => clientsService.getAllByUser(args)
});

export const useClientsGetByName = (args) => useQueryHook({
    queryKey: ['clients', 'getByName', args],
    queryFn: () => clientsService.getByName(args)
});

export const useClientsGetId = (args) => useQueryHook({
    queryKey: ['clients', 'getId', args],
    queryFn: () => clientsService.getId(args)
});

export const useClientsAddNew = () => useMutationHook({
    mutationKey: ['clients', 'addNew'],
    mutationFn: clientsService.addNew,
    invalidateQueries: [['clients']]
});

export const useClientsChangeData = () => useMutationHook({
    mutationKey: ['clients', 'changeData'],
    mutationFn: clientsService.changeData,
    invalidateQueries: [['clients']]
});

export const useClientsRemove = () => useMutationHook({
    mutationKey: ['clients', 'remove'],
    mutationFn: clientsService.remove,
    invalidateQueries: [['clients']]
});


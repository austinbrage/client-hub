import { Processes } from './processes.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const processesService = new Processes();


export const useProcessesGetAll = () => useQueryHook({
    queryKey: ['processes', 'getAll'],
    queryFn: processesService.getAll
});

export const useProcessesGetAllByJob = (args) => useQueryHook({
    queryKey: ['processes', 'getAllByJob', args],
    queryFn: () => processesService.getAllByJob(args)
});

export const useProcessesGetByTitle = (args) => useQueryHook({
    queryKey: ['processes', 'getByTitle', args],
    queryFn: () => processesService.getByTitle(args)
});

export const useProcessesGetId = (args) => useQueryHook({
    queryKey: ['processes', 'getId', args],
    queryFn: () => processesService.getId(args)
});

export const useProcessesAddNew = () => useMutationHook({
    mutationKey: ['processes', 'addNew'],
    mutationFn: processesService.addNew,
    invalidateQueries: [['processes']]
});

export const useProcessesChangeData = () => useMutationHook({
    mutationKey: ['processes', 'changeData'],
    mutationFn: processesService.changeData,
    invalidateQueries: [['processes']]
});

export const useProcessesRemove = () => useMutationHook({
    mutationKey: ['processes', 'remove'],
    mutationFn: processesService.remove,
    invalidateQueries: [['processes']]
});


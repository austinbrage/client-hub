import { Jobs } from './jobs.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const jobsService = new Jobs();


export const useJobsGetAll = () => useQueryHook({
    queryKey: ['jobs', 'getAll'],
    queryFn: jobsService.getAll
});

export const useJobsGetAllByClient = (args) => useQueryHook({
    queryKey: ['jobs', 'getAllByClient', args],
    queryFn: () => jobsService.getAllByClient(args)
});

export const useJobsGetByTitle = (args) => useQueryHook({
    queryKey: ['jobs', 'getByTitle', args],
    queryFn: () => jobsService.getByTitle(args)
});

export const useJobsGetId = (args) => useQueryHook({
    queryKey: ['jobs', 'getId', args],
    queryFn: () => jobsService.getId(args)
});

export const useJobsAddNew = () => useMutationHook({
    mutationKey: ['jobs', 'addNew'],
    mutationFn: jobsService.addNew,
    invalidateQueries: [['jobs']]
});

export const useJobsChangeData = () => useMutationHook({
    mutationKey: ['jobs', 'changeData'],
    mutationFn: jobsService.changeData,
    invalidateQueries: [['jobs']]
});

export const useJobsRemove = () => useMutationHook({
    mutationKey: ['jobs', 'remove'],
    mutationFn: jobsService.remove,
    invalidateQueries: [['jobs']]
});


import { Materials } from './materials.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const materialsService = new Materials();


export const useMaterialsGetAll = () => useQueryHook({
    queryKey: ['materials', 'getAll'],
    queryFn: materialsService.getAll
});

export const useMaterialsGetAllByJob = (args) => useQueryHook({
    queryKey: ['materials', 'getAllByJob', args],
    queryFn: () => materialsService.getAllByJob(args)
});

export const useMaterialsGetAllByProcess = (args) => useQueryHook({
    queryKey: ['materials', 'getAllByProcess', args],
    queryFn: () => materialsService.getAllByProcess(args)
});

export const useMaterialsGetByTitle = (args) => useQueryHook({
    queryKey: ['materials', 'getByTitle', args],
    queryFn: () => materialsService.getByTitle(args)
});

export const useMaterialsGetIdByJob = (args) => useQueryHook({
    queryKey: ['materials', 'getIdByJob', args],
    queryFn: () => materialsService.getIdByJob(args)
});

export const useMaterialsGetIdByProcess = (args) => useQueryHook({
    queryKey: ['materials', 'getIdByProcess', args],
    queryFn: () => materialsService.getIdByProcess(args)
});

export const useMaterialsAddNew = () => useMutationHook({
    mutationKey: ['materials', 'addNew'],
    mutationFn: materialsService.addNew,
    invalidateQueries: [['materials']]
});

export const useMaterialsChangeData = () => useMutationHook({
    mutationKey: ['materials', 'changeData'],
    mutationFn: materialsService.changeData,
    invalidateQueries: [['materials']]
});

export const useMaterialsRemove = () => useMutationHook({
    mutationKey: ['materials', 'remove'],
    mutationFn: materialsService.remove,
    invalidateQueries: [['materials']]
});


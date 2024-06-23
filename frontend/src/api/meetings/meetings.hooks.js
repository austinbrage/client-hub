import { Meetings } from './meetings.services.js';
import { useQueryHook } from '../../utils/queries.js';
import { useMutationHook } from '../../utils/mutations.js';

const meetingsService = new Meetings();


export const useMeetingsGetAll = () => useQueryHook({
    queryKey: ['meetings', 'getAll'],
    queryFn: meetingsService.getAll
});

export const useMeetingsGetAllByClient = (args) => useQueryHook({
    queryKey: ['meetings', 'getAllByClient', args],
    queryFn: () => meetingsService.getAllByClient(args)
});

export const useMeetingsGetByTitle = (args) => useQueryHook({
    queryKey: ['meetings', 'getByTitle', args],
    queryFn: () => meetingsService.getByTitle(args)
});

export const useMeetingsGetId = (args) => useQueryHook({
    queryKey: ['meetings', 'getId', args],
    queryFn: () => meetingsService.getId(args)
});

export const useMeetingsAddNew = () => useMutationHook({
    mutationKey: ['meetings', 'addNew'],
    mutationFn: meetingsService.addNew,
    invalidateQueries: [['meetings']]
});

export const useMeetingsChangeData = () => useMutationHook({
    mutationKey: ['meetings', 'changeData'],
    mutationFn: meetingsService.changeData,
    invalidateQueries: [['meetings']]
});

export const useMeetingsRemove = () => useMutationHook({
    mutationKey: ['meetings', 'remove'],
    mutationFn: meetingsService.remove,
    invalidateQueries: [['meetings']]
});


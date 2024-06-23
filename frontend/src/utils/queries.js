import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export const useQueryHook = ({ queryKey, queryFn, staleTime = Infinity, enable = false }) => {

    const TOAST_ID_QUERY = `${queryKey[0]}_TOAST_QUERY`;

    const { data, error, isPending, isLoading, isError, refetch } = useQuery({
        queryKey,
        queryFn,
        staleTime,
        enable
    });

    useEffect(() => {
        if (isLoading) {
            toast.loading('Requesting API', { id: TOAST_ID_QUERY });
        }

        if (isError) {
            toast.error('Internal error, please try again', { id: TOAST_ID_QUERY });
            console.error(`Error on ${queryKey[0]} - ${queryKey[1]}\n`, error.message);
        }

        if (!isError && !isLoading && !isPending && !data.success) {
            toast.error(`Api message: ${data.error.message}`, { id: TOAST_ID_QUERY });
        }

        if (!isError && !isLoading && !isPending && data.success) {
            toast.success(`Api message: ${data.result.message}`, { id: TOAST_ID_QUERY });
        }

    }, [isPending, isLoading, isError, data, error, queryKey, TOAST_ID_QUERY]);

    return {
        data: data?.success ? data.result.data : null,
        rawData: data,
        refetch,
        error
    };
};
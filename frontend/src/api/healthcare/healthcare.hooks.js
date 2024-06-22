import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import { Healthcare } from './healthcare.services.js';

const healthcareService = new Healthcare();
const TOAST_ID_QUERY = `HEALTHCARE_TOAST_QUERY`;


export const useHealthcareApi = () => {

    const { data, isPending, isLoading, isError, refetch, error } = useQuery({
        queryKey: ['healthcare', 'api'],
        queryFn: healthcareService.checkApi,
    });

    useEffect(() => {
        if (isLoading) {
            toast.loading('Requesting API', { id: TOAST_ID_QUERY });
        }

        if (isError) {
            toast.error('Internal error, please try again', { id: TOAST_ID_QUERY });
            console.error(`Error on healthcare - api\n`, error);
        }

        if (!isError && !isLoading && !isPending && !data.success) {
            toast.error(`Api message: ${data.error.message}`, { id: TOAST_ID_QUERY });
        }

        if (!isError && !isLoading && !isPending && data.success) {
            toast.success(`Api message: ${data.result.message}`, { id: TOAST_ID_QUERY });
        }

    }, [isPending, isLoading, isError, data, error]);

    return {
        data: data?.success ? data.result.data : null,
        rawData: data,
        refetch,
        error
    };
};

export const useHealthcareDatabase = () => {

    const { data, isPending, isLoading, isError, refetch, error } = useQuery({
        queryKey: ['healthcare', 'database'],
        queryFn: healthcareService.checkDatabase
    });

    useEffect(() => {
        if (isLoading) {
            toast.loading('Requesting API', { id: TOAST_ID_QUERY });
        }

        if (isError) {
            toast.error('Internal error, please try again', { id: TOAST_ID_QUERY });
            console.error(`Error on healthcare - database\n`, error);
        }

        if (!isError && !isLoading && !isPending && !data.success) {
            toast.error(`Api message: ${data.error.message}`, { id: TOAST_ID_QUERY });
        }

        if (!isError && !isLoading && !isPending && data.success) {
            toast.success(`Api message: ${data.result.message}`, { id: TOAST_ID_QUERY });
        }

    }, [isPending, isLoading, isError, data, error]);

    return {
        data: data?.success ? data.result.data : null,
        rawData: data,
        refetch,
        error
    };
};

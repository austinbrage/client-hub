import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMutationHook = ({ mutationKey, mutationFn, invalidateQueries = [] }) => {
    
    const TOAST_ID_MUTATE = `${mutationKey[0]}_TOAST_MUTATE`;
    
    const queryClient = useQueryClient();

    const { mutate, isPending, data, error } = useMutation({
        mutationKey,
        mutationFn,

        onMutate: () => {
            toast.loading('Requesting API', { id: TOAST_ID_MUTATE });
        },

        onError: (error) => {
            toast.error('Internal error, please try again', { id: TOAST_ID_MUTATE });
            console.error(`Error on ${mutationKey[0]} - ${mutationKey[1]}\n`, error.message);
        },

        onSuccess: async (data) => {
            if (data.success) {
                toast.success(`Api message: ${data.result.message}`, { id: TOAST_ID_MUTATE });
                
                invalidateQueries.forEach(key => {
                    queryClient.invalidateQueries({ queryKey: key });
                });
            } else {
                toast.error(`Api message: ${data.error.message}`, { id: TOAST_ID_MUTATE });
            }
        }
    });

    return {
        data: data?.success ? data.result.data : null,
        rawData: data,
        error,
        mutate,
        isPending,
        isSuccess: data?.success
    };
};
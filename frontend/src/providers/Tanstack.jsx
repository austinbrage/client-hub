import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect, Suspense, lazy } from 'react';
import { toastConfig } from '../utils/config.js';
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
);

export function TanstackProvider({ children }) {

    const [showDevtools, setShowDevtools] = useState(false);

    useEffect(() => {
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            
            {children}

            <Toaster toastOptions={toastConfig}/>
            <ReactQueryDevtools initialIsOpen={false} />

            {showDevtools && (
                <Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </Suspense>
            )}

        </QueryClientProvider>
    )
}

TanstackProvider.propTypes = {
    children: PropTypes.node.isRequired
}
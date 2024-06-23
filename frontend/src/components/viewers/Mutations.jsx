import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { FormMutation } from '../form/Form.jsx';
import { useRef, useEffect } from 'react';
import 'prismjs/components/prism-json.js';
import './viewer.css';

export function MutationViewerWithData({ useMutationHook, initialData }) {

    const { mutate, rawData, error } = useMutationHook();

    const rawDataContainer = useRef(null);
    const errorContainer = useRef(null);

    useEffect(() => {
        if (!rawDataContainer?.current) return;
        Prism.highlightAllUnder(rawDataContainer.current);
    }, [rawDataContainer, rawData]);

    useEffect(() => {
        if (!errorContainer?.current) return;
        Prism.highlightAllUnder(errorContainer.current);
    }, [errorContainer, error]);

    return (
        <>
            {/* <h2 onClick={() => mutate(mutationData)}>Swagger</h2> */}

            <FormMutation
                initialData={initialData}
                mutateData={(newData) => mutate(newData)}    
            />

            <p>data</p>
            <pre ref={rawDataContainer}>
                <code className='language-json'>
                    {JSON.stringify(rawData, null, 2)}
                </code>
            </pre>

            <p>error</p>
            {error?.message.split('\n').map((elem, index) => (
                <p key={index}>{elem}</p>
            ))}

            <pre ref={errorContainer}>
                <code className='language-json'>
                    {JSON.stringify(error?.details, null, 2)}
                </code>
            </pre>
        </>
    )
}

export function MutationViewerNoData({ useMutationHook }) {

    const { mutate, rawData, error } = useMutationHook();

    const rawDataContainer = useRef(null);
    const errorContainer = useRef(null);

    const sendMutation = () => mutate();

    useEffect(() => {
        if (!rawDataContainer?.current) return;
        Prism.highlightAllUnder(rawDataContainer.current);
    }, [rawDataContainer, rawData]);

    useEffect(() => {
        if (!errorContainer?.current) return;
        Prism.highlightAllUnder(errorContainer.current);
    }, [errorContainer, error]);

    return (
        <>
            <h2 onClick={() => sendMutation()}>Swagger</h2>

            <p>data</p>
            <pre ref={rawDataContainer}>
                <code className='language-json'>
                    {JSON.stringify(rawData, null, 2)}
                </code>
            </pre>

            <p>error</p>
            {error?.message.split('\n').map((elem, index) => (
                <p key={index}>{elem}</p>
            ))}

            <pre ref={errorContainer}>
                <code className='language-json'>
                    {JSON.stringify(error?.details, null, 2)}
                </code>
            </pre>
        </>
    )
}

MutationViewerWithData.propTypes = {
    useMutationHook: PropTypes.func.isRequired,
    initialData: PropTypes.object.isRequired
}

MutationViewerNoData.propTypes = {
    useMutationHook: PropTypes.func.isRequired
}
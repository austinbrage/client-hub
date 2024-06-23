import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { Form } from '../form/Form.jsx';
import 'prismjs/components/prism-json.js';
import './viewer.css';

export function QueryViewerWithData({ useQueryHook, initialData }) {

    const [queryData, setQueryData] = useState(initialData);

    const { rawData, error } = useQueryHook(queryData);

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
            {/* <h2 onClick={() => refetch()}>Request Data</h2> */}

            <div className="explorer">
                <Form 
                    initialData={initialData}
                    updateFetchData={(newData) => setQueryData(newData)}
                />
                <div className='explorer-result'>
                    {rawData && (
                        <div className="explorer-result-data">
                            <p>Raw Data</p>
                            <pre ref={rawDataContainer}>
                                <code className='language-json'>
                                    {JSON.stringify(rawData, null, 2)}
                                </code>
                            </pre>
                        </div>
                    )}
                    {rawData && (
                        <div className="explorer-result-error">
                            <p>Error</p>
                            {error?.name === 'ValidationError' ? (
                                <div className="explorer-result-error-validation">
                                    {error?.message.split('\n').map((elem, index) => (
                                        <p key={index}>{elem}</p>
                                    ))}

                                    <pre ref={errorContainer}>
                                        <code className='language-json'>
                                            {JSON.stringify(error?.details, null, 2)}
                                        </code>
                                    </pre>
                                </div>
                            ) : (
                                <div className="explorer-result-error-message">
                                    <p>{error?.message}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export function QueryViewerNoData({ useQueryHook }) {

    const { rawData, refetch, error } = useQueryHook();

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
            <h4 onClick={() => refetch()}>Refetch</h4>

            <p>Raw Data</p>
            <pre ref={rawDataContainer}>
                <code className='language-json'>
                    {JSON.stringify(rawData, null, 2)}
                </code>
            </pre>

            <p>Error</p>
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

QueryViewerWithData.propTypes = {
    useQueryHook: PropTypes.func.isRequired,
    initialData: PropTypes.object.isRequired
}

QueryViewerNoData.propTypes = {
    useQueryHook: PropTypes.func.isRequired
}
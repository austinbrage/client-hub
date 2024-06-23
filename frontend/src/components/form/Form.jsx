import PropTypes from 'prop-types';
import { useRef } from 'react';
import { RenderInput } from '../inputs/Inputs.jsx';
import './form.css';

export function Form({ initialData, updateFetchData }) {

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!formRef?.current) return console.error("formRef is not defined");

        const data = {};
        
        Object.entries(initialData).forEach(([key, value]) => {
            switch(typeof value) {
                case 'boolean':
                    return data[key] = formRef.current.elements[key].checked;
                case 'number':
                    return data[key] = parseFloat(formRef.current.elements[key].value);
                default:
                    return data[key] = formRef.current.elements[key].value;
            }
        })      
        
        updateFetchData(data);
    }

    return (
        <div className="form-section">
            <div className="form-section-container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                            <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item">
                            <form ref={formRef} onSubmit={handleSubmit} className="app-form">
                                {Object.entries(initialData).map(([key, value], index) => (
                                    <div key={index} className="app-form-group">
                                        <RenderInput
                                            property={key} 
                                            value={value}
                                        />
                                    </div>
                                ))}
                                <div className="app-form-buttons">
                                    <button className="app-form-button">RANDOM</button>
                                    <button type='submit' className="app-form-button">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    initialData: PropTypes.object.isRequired,
    updateFetchData: PropTypes.func.isRequired
}

export function FormMutation({ initialData, mutateData }) {

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!formRef?.current) return console.error("formRef is not defined");

        const data = {};
        
        Object.entries(initialData).forEach(([key, value]) => {
            switch(typeof value) {
                case 'boolean':
                    return data[key] = formRef.current.elements[key].checked;
                case 'number':
                    return data[key] = parseFloat(formRef.current.elements[key].value);
                default:
                    return data[key] = formRef.current.elements[key].value;
            }
        })      
        
        mutateData(data);
    }

    return (
        <div className="form-section">
            <div className="form-section-container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                            <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item">
                            <form ref={formRef} onSubmit={handleSubmit} className="app-form">
                                {Object.entries(initialData).map(([key, value], index) => (
                                    <div key={index} className="app-form-group">
                                        <RenderInput
                                            property={key} 
                                            value={value}
                                        />
                                    </div>
                                ))}
                                <div className="app-form-buttons">
                                    <button className="app-form-button">RANDOM</button>
                                    <button type='submit' className="app-form-button">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

FormMutation.propTypes = {
    initialData: PropTypes.object.isRequired,
    mutateData: PropTypes.func.isRequired
}
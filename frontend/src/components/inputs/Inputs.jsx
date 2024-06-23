import PropTypes from 'prop-types';
import './inputs.css';

const RenderLabelInput = ({ property, type, value, placeholder }) => (
    <>
        <label htmlFor={property} className="app-form-label">
            {property}:
        </label>
        <input
            type={type}
            id={property}
            name={property}
            className="app-form-control"
            placeholder={placeholder}
            defaultValue={type !== 'checkbox' ? value : undefined}
            defaultChecked={type === 'checkbox' ? value : undefined}
        />
    </>
);

export function RenderInput({ property, value }) {
    const type = typeof value;

    switch (type) {
        case 'string':
            return RenderLabelInput({
                property,
                type: 'text',
                value,
                placeholder: property,
            });
        case 'number':
            return RenderLabelInput({
                property,
                type: 'number',
                value,
                placeholder: property,
            });
        case 'boolean':
            return (
                <div className="checkbox-wrapper">
                    <span>{property}:</span>
                    <input
                        type="checkbox"
                        id={property}
                        name={property}
                        defaultChecked={value}
                    />
                    <label htmlFor={property}></label>
                </div>
            );
        default:
            return RenderLabelInput({
                property,
                type: 'text',
                value,
                placeholder: property,
            });
    }
}

RenderLabelInput.propTypes = { 
    property: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]).isRequired, 
    placeholder: PropTypes.string.isRequired
}

RenderInput.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]).isRequired
}

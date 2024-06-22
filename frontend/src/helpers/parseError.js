export const parseErrors = (errors) => {

    const parseUnionErrors = (error) => {
        const expectedTypes = error.unionErrors.map(unionError => {
            return unionError.issues.map(issue => issue.expected).join(' or ');
        }).join(' or ');

        return `Invalid_union on ${error.path.join('.')} [Expected ${expectedTypes}, received ${error.unionErrors[0].issues[0].received}]`;
    }

    return errors.map(error => {
        switch(error.code) {
            case 'invalid_type':
                return `Invalid_type on ${error.path.length > 0 ? error.path.join('.') : 'argument'} [Expected ${error.expected}, received ${error.received}]`;
                
            case 'invalid_literal':
                return `Invalid_literal on ${error.path.join('.')} [Expected literal ${JSON.stringify(error.expected)}]`;
                
            case 'custom':
                return `Custom error on ${error.path.join('.')} [${error.message}]`;
                
            case 'invalid_union':
                return parseUnionErrors(error);
                
            case 'invalid_enum_value':
                return `Invalid_enum_value on ${error.path.join('.')} [Expected ${error.options.join(' | ')}, received ${error.received}]`;
                
            case 'unrecognized_keys':
                return `Unrecognized_keys on ${error.path.join('.')} [Unrecognized keys: ${error.keys.join(', ')}]`;
                
            case 'invalid_arguments':
                return `Invalid_arguments on ${error.path.join('.')} [${error.message}]`;
                
            case 'invalid_return_type':
                return `Invalid_return_type on ${error.path.join('.')} [${error.message}]`;
                
            case 'invalid_date':
                return `Invalid_date on ${error.path.join('.')} [Invalid date]`;
                
            case 'invalid_string':
                return `Invalid_string on ${error.path.join('.')} [Expected ${error.validation}, received ${error.received}]`;
                
            case 'too_small':
                return `Too_small on ${error.path.join('.')} [Minimum ${error.minimum}, received ${error.received}]`;
                
            case 'too_big':
                return `Too_big on ${error.path.join('.')} [Maximum ${error.maximum}, received ${error.received}]`;
                
            case 'invalid_intersection_types':
                return `Invalid_intersection_types on ${error.path.join('.')} [Invalid intersection]`;
                
            case 'not_multiple_of':
                return `Not_multiple_of on ${error.path.join('.')} [Expected multiple of ${error.multipleOf}, received ${error.received}]`;
                
            case 'invalid_array':
                return `Invalid_array on ${error.path.join('.')} [${error.message}]`;
                
            default:
                return `Unknown error on ${error.path.join('.')} [${error.message}]`;
        }
    }).join('\n\n');
}

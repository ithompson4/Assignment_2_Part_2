import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css';

const Select = (props) => {
    const { children, selectStyle, onChange } = props;

    const handleOnChange = (e, onChange) => {
        onChange(e.target.value);
    }
    return (
        <div>
            <select onChange={(e) => handleOnChange(e, onChange)} 
                    className={`${styles.select} ${styles[selectStyle]}`
        }>
         {children}
        </select>
        </div>
    );
};

Select.propTypes = {
    selectStyle: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Select;
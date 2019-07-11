import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = (props) => {

    const { onChange, children, inputLabel, styleInput } = props;
    const handleOnChange = (e, onChange) => {
        onChange(e.target.value);
    }

    return (
        <span>
            <label>
                {inputLabel}
            </label>
            <input
                type="text"
                className={`${styles.input} ${styles[styleInput]}`}
                onChange={(e) => handleOnChange(e, onChange)} 
            />
            {children}
        </span>
    );
};

Input.propTypes = {
    styleInput: PropTypes.string,
    inputLabel: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
}

export default Input;
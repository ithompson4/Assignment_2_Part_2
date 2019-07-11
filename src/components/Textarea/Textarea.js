import React from 'react';
import PropTypes from 'prop-types';

import styles from './Textarea.module.css';

const Textarea = (props) => {
    const { message, areaTitle, textareaStyle, onChange } = props;

    const handleOnChange = (e, onChange) => {
        onChange(e.target.value);
    }

    return (
        <div>
            <p>{message}</p>
            <textarea 
                onChange={(e) => handleOnChange(e, onChange)}
                className={`${styles.textarea} ${styles[textareaStyle]}`}
                placeholder={areaTitle}>
            </textarea>
        </div>
    );
};

Textarea.propTypes = {
    message: PropTypes.string,
    textareaStyle: PropTypes.string,
    areaTitle: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
    ]),
}

export default Textarea;


import React from 'react';

import styles from './Modal.module.css';
import Button from '../Button/Button';

const Modal = (props) => {
    const {name, email, select, text, closeMethod} = props;

    const closeModel = () => {
        closeMethod();
    }

    return (
        <React.Fragment>
            <div className={`${styles.modalStyle}`}>
                Name: {name}<br />
                Email: {email}<br />
                Topics: {select}<br />
                Content: {text}<br />
               <Button buttonStyle="danger" onClick={closeModel}>Close</Button>
        </div>
        </React.Fragment>
    );
};

export default Modal;
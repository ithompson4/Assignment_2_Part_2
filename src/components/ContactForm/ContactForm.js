import React, { useState } from 'react';

import styles from './ContactForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Textarea from '../Textarea/Textarea';
import Modal from '../Modal/Modal';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [select, setTopic] = useState('');
    const [text, setText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const nameChange = (name) => {
        setName(name);
      }

      const emailChange = (email) => {
        setEmail(email);
      }
    
      const selectChange = (select) => {
        setTopic(select);
      }

      const textChange = (text) => {
        setText(text);
      }

      const onSubmit = () => {
        setModalOpen(true);
      }
    
      const hideModal = () => {
        setModalOpen(false);
      }

    return (
        <form className={`${styles.formStyle}`}> 
            <div>  
                <Input styleInput="inputBorderBottom" inputLabel="Enter Name: "
                    onChange={nameChange} />
            </div>
            <div>  
                <Input styleInput="inputBorderBottom" inputLabel="Enter Email: " 
                    onChange={emailChange} />
            </div>
            <div>
                <Select selectStyle="selectCust" onChange={selectChange}>
                    <option value="Select again">Select Topic:</option>
                    <option value="BMW">BMW</option>
                    <option value="Lincoln">Lincoln</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Other">Other</option>
                </Select>
            </div>
            <div>
                <Textarea 
                    textareaStyle="textareaDotted" 
                    message="Leave Comment" 
                    areaTitle="Comment..."
                    onChange={textChange} />
           </div>
            <div>
                <Button buttonStyle="primary" onClick={onSubmit}>Submit</Button>
            </div>
        
            {(() => {
            if(modalOpen) {
                return(
                <Modal 
                    name={name} 
                    email={email} 
                    select={select} 
                    text={text} 
                    closeMethod={hideModal} 
                />)
                }
            })()}
        </form>
    );
};

export default ContactForm;
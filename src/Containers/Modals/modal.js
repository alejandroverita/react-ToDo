import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

import {TodoContext} from '../../Context/TodoContext';

function Modal({ children}) {

    const {
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = (event) => {
        if (event.target.className==='ModalBackground'){

            setOpenModal(false);
        }
        
    };

    return ReactDOM.createPortal(
        <div className='ModalBackground' onClick={onCancel}>
            {children}
            
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }; 
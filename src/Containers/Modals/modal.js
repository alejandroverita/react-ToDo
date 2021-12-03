import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

function Modal({ children, setOpenModal}) {

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
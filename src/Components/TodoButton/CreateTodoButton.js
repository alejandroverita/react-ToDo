import React from 'react';

import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal, openModal}){

    const onClickButton = () =>{
        // props.setOpenModal(prevState => return !prevState) //retorna una respues contraria a la pasada por parametro
        setOpenModal(!openModal)
    };
    return (
        <button 
        className='CreateTodoButton'
        onClick={onClickButton}>
            +
        </button>
    );
}

export {CreateTodoButton};
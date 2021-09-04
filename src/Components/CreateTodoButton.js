import React from 'react';

import './Styles/CreateTodoButton.css';

function CreateTodoButton(props){

const onClickButton = (msg) =>{
    alert(msg)
}
    return (
        <button 
        className='CreateTodoButton'
        onClick={()=>onClickButton('aqui va el mensaje')}>
            +
        </button>
    );
}

export {CreateTodoButton};
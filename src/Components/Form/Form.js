import React from 'react';

import './Form.css';

function Form ({addTodo, setOpenModal}) {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const [placeholder, setPlaceholder] = React.useState('Escribe una tarea');
    
    const onAdd = (event) =>{
        event.preventDefault();

        if(newTodoValue.length > 0){
            addTodo(newTodoValue)
            setOpenModal(false)
        } else {
            setPlaceholder('Escribe una tarea para añadirla :)');
        }
        
    };

    const onChange =(event) =>{
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    };


    const onKeyUp = (e) => {
        if(e.charCode === 13){
            e.preventDefault();
            addTodo(newTodoValue);
            onCancel();
        };
    }

    
    
    return (
        
        <form className='Form' onSubmit={onAdd} onKeyPress={onKeyUp}>
            <label>Escribe una nueva tarea</label>
            <textarea 
            
            value ={newTodoValue}
            onChange = {onChange}
            placeholder={placeholder}> 
                
            </textarea>
            <div className='TodoForm__buttonContainer'>
                <button className='TodoForm-button TodoForm-button-add' >Agregar</button>
                <button className='TodoForm-button TodoForm-button-cancel' type='button' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    )
}

export { Form };
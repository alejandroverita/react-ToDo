import React from 'react';
import { TodoContext } from '../../Context/TodoContext';

import './Form.css';

function Form () {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    
    const onAdd = (event) =>{
        event.preventDefault();
        
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    const onChange =(event) =>{
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    };
    
    return (

        <form onSubmit={onAdd}>
            <label>Escribe una nueva Tarea</label>
            <textarea 
            value ={newTodoValue}
            onChange = {onChange}
            placeholder='Tomar la medicina de las 8'> 
                
            </textarea>
            <div className='TodoForm__buttonContainer'>
                <button className='TodoForm-button TodoForm-button-add' >Agregar</button>
                <button className='TodoForm-button TodoForm-button-cancel' type='button' onClick={onCancel}>Cancelar</button>
            </div>
        </form>
    )
}

export { Form };
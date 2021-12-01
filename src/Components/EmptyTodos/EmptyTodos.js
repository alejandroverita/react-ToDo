import React from 'react';
import './EmptyTodos.css';
// import { TodoContext } from '../../Context/TodoContext';

function EmptyTodos() {
    return (
        
        <div className='EmptyTodos'>
            {/*  <img src='../../Assets/icons/not-found.svg' alt='Not Found'/> */}
            <h2 className='EmptyTodos-Title'>
                No hay tareas pendientes hoy
            </h2 >
            <p className='EmptyTodos-paragraph'>Crea tu primer ToDo's! </p>
        </div>
        
            
    )
}

export { EmptyTodos }
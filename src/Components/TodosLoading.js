import React from 'react';
import './Styles/TodosLoading.css'

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className='LoadingTodo-text'>Cargando...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading };
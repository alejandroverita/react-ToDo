import React from 'react';

import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading, user}) {
    
    
    return (
        <>
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}
        >
            Hola {user} <br />
            Has completado {completedTodos} de {totalTodos} ToDo's
        </h2>
        </>
    );
}

export { TodoCounter };
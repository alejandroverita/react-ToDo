import React from 'react';
import './EmptyTodos.css';
// import { TodoContext } from '../../Context/TodoContext';

function EmptyTodos() {
    return (
        
        <div className='EmptyTodos'>
            {/* <div>
             <img src='../../Assets/img/start.jpg' alt='Write a note'/>
             <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a>
            </div> */}
            <h2 className='EmptyTodos-Title'>
                Crea tu primer ToDo's!
            </h2 >
            <p className='EmptyTodos-paragraph'> Para agregar tu primer TODO presiona el boton <span>+</span> </p>
        </div>
        
            
    )
}

export { EmptyTodos }
import React from 'react';

import './TodoItem.css';

import { TodoCompleteIcon } from '../TodoCompleteIcon/TodoCompleteIcon';
import { TodoDeleteIcon } from '../TodoDeleteIcon/TodoDeleteIcon';


function TodoItem(props) {
    return(
       <li className='TodoItem'>
           <TodoCompleteIcon
            completed ={props.completed}
            onComplete = {props.onComplete}
            />
           <p 
           className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
           >{props.text}</p>
           <TodoDeleteIcon
            onDelete = {props.onDelete}
           />
       </li> 
    );
}

export { TodoItem };
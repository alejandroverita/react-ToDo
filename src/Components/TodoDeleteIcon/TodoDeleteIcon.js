import React from 'react';
import { TodoIcon } from '../TodoIcon/TodoIcon';

function TodoDeleteIcon ({onDelete}){
    return (
        <TodoIcon 
            type='remove'
            onClick={onDelete}
        />
    );
}

export { TodoDeleteIcon };
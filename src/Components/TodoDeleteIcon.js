import React from 'react';
import { TodoIcon } from './TodoIcon';

function TodoDeleteIcon ({onDelete}){
    return (
        <TodoIcon 
            type='remove'
            onClick={onDelete}
        />
    );
}

export { TodoDeleteIcon };
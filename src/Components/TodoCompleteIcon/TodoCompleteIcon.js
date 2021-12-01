import React from 'react';
import { TodoIcon } from '../TodoIcon/TodoIcon';


function TodoCompleteIcon ({completed, onComplete}){
    return (
        <TodoIcon 
            type='check'
            color={completed ? '#4caf50' : 'gray'}
            onClick={onComplete}
        />
    );
}

export { TodoCompleteIcon };
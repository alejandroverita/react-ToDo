import React from 'react';

import './Styles/TodoIcon.css'

/* Icons */
import { ReactComponent as CheckSVG } from './Assets/icons/check.svg';
import { ReactComponent as RemoveSVG } from './Assets/icons/remove.svg';

const iconTypes = {
    "check" : color =>(<CheckSVG className='Icon-svg Icon-svg--check' fill={color} />),
    "remove" : color => (<RemoveSVG className='Icon-svg Icon-svg--delete' fill={color}/>),
};

function TodoIcon({ type, color ='gray', onClick}) {
    return (
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon }
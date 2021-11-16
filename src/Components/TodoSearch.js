import React from 'react';

import './Styles/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange= (event)=>{
        console.log(event.target.value);
        //establece nuevo valor al momento de escribir en el input
        setSearchValue(event.target.value);
    }

    return[
        <input 
            className='TodoSearch' 
            placeholder='Buscar'
            onChange={onSearchValueChange}
            value={searchValue}
        />
    ]
    
}

export { TodoSearch };
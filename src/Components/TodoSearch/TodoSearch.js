import React from 'react';

import './TodoSearch.css';

function TodoSearch( { searchValue, setSearchValue } ) {

    const onSearchValueChange= (event)=>{
        // console.log(event.target.value);
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
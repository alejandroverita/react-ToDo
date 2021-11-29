import React from 'react';

import {TodoContext} from '../../Context/TodoContext';

function TodosError(){
    const {error} = React.useContext(TodoContext);
    return <p>Ah caray, parece que hubo un {error} </p>
}

export {TodosError};
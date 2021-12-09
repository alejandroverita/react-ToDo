import React from 'react';
import { useStorageListener} from './useStorageListener';

import './ChangeAlert.css';

const ChangeAlert = ( {sincronize} ) => {
    const { show, toggleShow } = useStorageListener(sincronize);
    if (show) {
        return (
            <div className='ChangeAlert'>
                <div className='ChangeAlert-container'>

                    <p>Se detecto un cambio en otra pestaña del navegador</p>
                    <p>¿Deseas actualizar?</p>
                    <button
                    className = 'TodoForm-button TodoForm-button-add'
                        onClick = {() => toggleShow(false)}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        )

    } else {
        return null
    }
    
}

export {ChangeAlert};
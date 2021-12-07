import React from 'react';
import { withStorageListener} from './withStorageListener';

import './ChangeAlert.css';

const ChangeAlert = ({show, toggleShow}) => {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};
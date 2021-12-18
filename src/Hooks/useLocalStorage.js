import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

    //desestructuracion del estado 
    const {
      sincronizedItem,
      error,
      loading,
      item,
    } = state;

    //ACTION CREATORS
    const onError = (error) => dispatch({
      type: actionTypes.ERROR, 
      payload: error
    });

    const onSuccess = (item) => dispatch({
      type: actionTypes.SUCCESS, 
      payload: item
    });

    const onSave = (item) => dispatch({
      type: actionTypes.SAVE,
      payload: item
    });

    const onSincronize = () => dispatch({
      type: actionTypes.SINCRONIZE,
    })
  
    React.useEffect(()=>{
      setTimeout(() => {
  
        try {
          //localstorage solo admite string
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
        
          //verifica si los usuarios son nuevos
          if (!localStorageItem) {
            //JSON.stringify Nos permite transformar en texto un objeto o array de JS. 
            //  Initial Value puede ser un array, string o lo que sea
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            
            //Pasarle un estado por defecto
            parsedItem = initialValue;  
        
          } else {
            //transforma la informacion contenido en un string a un objeto JS comun y corriente 
            parsedItem = JSON.parse(localStorageItem);
          }
          onSuccess(parsedItem)
        
        } catch (error) {
            onError(error);
        }
      }, 3000);
    }, [sincronizedItem]);
    
    
    //Actualiza informacion en el LocalStorage
    const saveItem = (newItem)=> {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        onSave(newItem);
        
      } catch {
        onError(error);
      }
    };

    const sincronizeItem = () =>{
      onSincronize();
    }
     
    return {
      item,
      saveItem,
      loading,
      error, 
      sincronizeItem,
  
    };
  
}

const initialState = ({initialValue }) =>({
  sincronizeItem: true,
  error: false,
  loading: true,
  item: initialValue,
});


const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  SINCRONIZE : 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]:{
    ...state,
    error: true,
  },

  [actionTypes.SUCCESS]:{
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },

  [actionTypes.SAVE] : {
    ...state,
    item: payload,

  },

  [actionTypes.SINCRONIZE]: {
    ...state,
    loading: true,
    sincronizedItem: false,

  },
  
});


const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage }
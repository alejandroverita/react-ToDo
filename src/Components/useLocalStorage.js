
import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false);
  
    const [loading, setLoading] = React.useState(true);
    
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(() => {
  
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
        
          //verifica si los usuarios son nuevos
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            
            //Pasarle un estado por defecto
            parsedItem = initialValue;
        
          } else {
            //transforma la informacion contenido en un string a un objeto JS comun y corriente 
            parsedItem = JSON.parse(localStorageItem);
          }
  
          //actualiza el estado del item
          setItem(parsedItem);
  
          //actualiza el estado de carga 
          setLoading(false)
        
        } catch (error) {
            setError(error);
        }
      }, 1000);
    });
    
  
    const saveItem = (newItem)=> {
      try {
        const stringifiedItem = JSON.stringify(newItem);
  
        localStorage.setItem(itemName, stringifiedItem)
  
        //El estado no necesita el string del array, solo el LOCALSTORAGE
        setItem(newItem);
      } catch {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
  
    };
  
}

export { useLocalStorage }
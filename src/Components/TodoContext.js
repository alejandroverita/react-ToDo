import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    
    

    //contando cuantos estan completados
    const completedTodos = todos.filter(todo=> todo.completed).length // OR todo=> !!todo.completed
    
    //contando la extension de las tareas en total  
    const totalTodos = todos.length;



    //Creamos un estado que por defecto esta VACIO
    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos = [];

    if(!searchValue.length >= 1){
    //si usuario no ha escrito nada, el nuevo array va a ser igual a nuestra lista default
    searchedTodos = todos;
    } else {
    searchedTodos = todos.filter(todo=>{
        //Transfroma todos los ToDo's a minusculas
        const todoText = todo.text.toLowerCase()
        //Toda la busqueda la transforma en minuscula
        const searchText = searchValue.toLowerCase();

        //Por cada uno de los ToDo's incluyen en alguna parte el texto que escribimos en la seccion de busqueda
        return todoText.includes(searchText);
    });

    }

    

    //Metodos para completar los ToDos. Al ejecutar la funcion se re-renderiza 
    const completeTodo = (text) =>{
    //recorre cada ToDo's y examina cual tiene exactamente ese mismo texto. Regresa la posicion
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos];
    
    //entra a la propiedad del objeto y la marca complete: TRUE
    newTodos[todoIndex] = {
        text: todos[todoIndex].text,
        completed: true,
    };

    // manda actualizar el estado
    saveTodos(newTodos);
    };

    //Metodos para eliminar los ToDos. Al ejecutar la funcion se re-renderiza 
    const deleteTodo = (text) =>{
    //busca la posicion del indice que tenga el mismo texto que el parametro
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos];
    
    //Elimino ese ToDo de la lista
    newTodos.splice(todoIndex, 1);

    // manda actualizar el estado
    saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value ={{
            loading, 
            error, 
            totalTodos, 
            completedTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodo, 
            deleteTodo, 

        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};
<TodoContext.Consumer></TodoContext.Consumer>
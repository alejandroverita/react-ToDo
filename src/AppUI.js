import React from 'react';

/* Components */
import { TodoContext } from './Components/TodoContext';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { Form } from './Components/Form'

/* Modal */
import { Modal } from './Modals/modal';


function AppUI() {

  const {error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,} = React.useContext(TodoContext);
  
    
    return (
    <React.Fragment>
    
      <TodoCounter />

      <TodoSearch />

        <TodoList>

          {error && <p>Aqui ha ocurrido un error, Y ahoraaa??</p>}
          {loading && <p>Espera tan solo un poquito mas...</p>}
          {(!loading && !searchedTodos) && <p>Empecemos! Agrega una tarea</p>}

          {searchedTodos.map(todo=>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete= {() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList>

          {openModal && (

            <Modal>
              <Form/>
            </Modal>
          )}

      <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
      />
      
    </React.Fragment>
    );
}

export { AppUI }
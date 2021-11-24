import React from 'react';

/* Components */
import { TodoHeader } from './Components/TodoHeader';
import { TodoContext } from './Components/TodoContext';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { Form } from './Components/Form'
import { Footer } from './Components/Footer';

import { TodosError } from './Components/TodosError'
import { TodosLoading } from './Components/TodosLoading'
import { EmptyTodos } from './Components/EmptyTodos'

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
    
      < TodoHeader >
         <TodoCounter />
         <TodoSearch />

      </ TodoHeader >

        <TodoList>

          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos) && <EmptyTodos /> }

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

      <Footer />
      
    </React.Fragment>
    );
}

export { AppUI }
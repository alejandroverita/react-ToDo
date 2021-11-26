import React from 'react';

/* Containers */
import { TodoHeader } from './Header/TodoHeader';
import { Footer } from './Footer/Footer';
import { Modal } from './Modals/modal';

/* Components */
import { TodoContext } from '../Context/TodoContext';
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { CreateTodoButton } from '../Components/TodoButton/CreateTodoButton';
import { Form } from '../Components/Form/Form';
import { TodosError } from '../Components/TodosError/TodosError';
import { TodosLoading } from '../Components/TodosLoading/TodosLoading';
import { EmptyTodos } from '../Components/EmptyTodos/EmptyTodos';



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
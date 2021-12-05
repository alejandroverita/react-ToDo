import React from 'react';

/* Containers */
import { TodoHeader } from '../Containers/Header/TodoHeader';
import { Footer } from '../Containers/Footer/Footer';
import { Modal } from '../Containers/Modals/Modal';

/* Hooks */
import { useTodos } from '../Hooks/useTodos'


/* Components */
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { CreateTodoButton } from '../Components/TodoButton/CreateTodoButton';
import { Form } from '../Components/Form/Form';
import { TodosError } from '../Components/TodosError/TodosError';
import { TodosLoading } from '../Components/TodosLoading/TodosLoading';
import { EmptyTodos } from '../Components/EmptyTodos/EmptyTodos';


/* Styles */
import './App.css';

function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos();
  
  return (
    <React.Fragment>
    
      < TodoHeader loading={loading}>
        
         <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
         />
         <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
         />

      </ TodoHeader >

        <TodoList 
          error = {error}
          loading = {loading}
          totalTodos = {totalTodos}
          searchedTodos = {searchedTodos}
          searchText = {searchValue}

          onError={()=> <TodosError />}
          onLoading = {()=> <TodosLoading />}
          onEmptyTodos = {() => <EmptyTodos />}
          onEmptySearchResults = {(searchText) => 
            <p>No hay resultados para <strong>{searchText}</strong></p>
          }
          /* render = { todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete= {() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)}
              />
          )} */
          >

          {/* renderFunction */}
          {todo=>(
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete= {() => completeTodo(todo.text)} 
                onDelete={() => deleteTodo(todo.text)}
                />
            )}

        </TodoList>

          {openModal && (

            <Modal 
            setOpenModal={setOpenModal}
            >
              
              <Form
                addTodo = {addTodo}
                setOpenModal = {setOpenModal}
              />
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

export default App;
import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';


import './App.css';

const todos = [
  {text: 'Ir a comer', completed: false},
  {text: 'Lavar los trates suciios', completed: false},
  {text: 'Cepillar los dientes', completed: false},
];

function App() {
  return (
    <React.Fragment>
    
      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;

import React from 'react';

import { TodoProvider } from './Components/TodoContext'

import { AppUI } from './AppUI';

/* Styles */
/* import './App.css'; */

function App() {
  return (
    <TodoProvider>
      <AppUI />

    </TodoProvider>
  );
}

export default App;

import React from 'react';

import { TodoContext } from '../Context/TodoContext'

import { AppUI } from '../Containers/AppUI';

/* Styles */
/* import './App.css'; */

function App() {
  return (
    <TodoContext>
      <AppUI />

    </TodoContext>
  );
}

export default App;

// react hooks
import React from 'react';

//local components
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>my Todo</h1>
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Task from './Task';

const TodoList = ({ todos }) => {
  const [showList, setShowList] = useState('fullList');

  return (
    <>
      <div className="todo-filter">
        <button className="btn-filter" onClick={() => setShowList('completed')}>
          completed tasks
        </button>
        <button className="btn-filter" onClick={() => setShowList('fullList')}>
          full list
        </button>
        <button
          className="btn-filter"
          onClick={() => setShowList('uncompleted')}
        >
          tasks to complete
        </button>
      </div>
      {!todos.length && <h1>no todos yet</h1>}
      <div className={`todo-list ${!todos.length && 'hidden'}`}>
        {todos.length &&
          showList === 'fullList' &&
          todos.map((todo, index) => {
            return (
              <div key={todo.id} className="todo-item">
                <Task todo={todo} />
              </div>
            );
          })}

        {todos.length &&
          showList === 'completed' &&
          todos.map(
            (todo, index) =>
              todo.completed && (
                <div key={todo.id} className="todo-item">
                  <Task todo={todo} />
                </div>
              )
          )}

        {todos.length &&
          showList === 'uncompleted' &&
          todos.map(
            (todo, index) =>
              !todo.completed && (
                <div key={todo.id} className="todo-item">
                  <Task todo={todo} />
                </div>
              )
          )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps)(TodoList);

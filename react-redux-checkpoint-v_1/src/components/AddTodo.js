import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = ({ todos, addTodo }) => {

  const [userInput, setUserInput] = useState('');
  
  const handleOnAddTodo = (event) => {
    event.preventDefault();
    userInput && addTodo({ id: todos.length + 1, title: userInput });
    setUserInput('');
  };

  return (
    <form className="todo" onSubmit={handleOnAddTodo}>
      <input
        className="input"
        type="text"
        placeholder="what are your plans"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className="btn btn-add" onClick={handleOnAddTodo}>
        <FaPlusCircle />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};
export default connect(mapStateToProps, { addTodo: addTodo })(AddTodo);

import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
//redux hooks & actions
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const [userInput, setUserInput] = useState('');
  //redux useDispatch : to call the function
  const dispatch = useDispatch();
  //redux useSelector : to call state
  const todos = useSelector((state) => state.todos);

  const handleOnAddTodo = (event) => {
    event.preventDefault();
    userInput && dispatch(addTodo({ id: todos.length + 1, title: userInput }));
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

export default AddTodo;

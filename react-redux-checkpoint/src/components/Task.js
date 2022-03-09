import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { completedTodo, deleteTodo, editTodo } from '../redux/todoSlice';

function Task({ todo }) {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="checkbox"
        id="todoCompleted"
        checked={todo.completed}
        onChange={() => dispatch(completedTodo(todo.id))}
      />

      <h1 className={`todo-text ${todo.completed && 'completed'}`}>
        {todo.title}
      </h1>

      <button
        className="btn btn-edit"
        onClick={() => dispatch(editTodo(todo.id))}
      >
        <FaRegEdit />
      </button>

      <button
        className="btn btn-delete"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        <FaTrashAlt />
      </button>
    </>
  );
}

export default Task;

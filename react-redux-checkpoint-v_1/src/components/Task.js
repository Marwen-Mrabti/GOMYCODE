import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo, editTodo, completedTodo } from '../redux/actions';

function Task({ todo, deleteTodo, editTodo, completedTodo }) {
  return (
    <>
      <input
        type="checkbox"
        id="todoCompleted"
        checked={todo.completed}
        onChange={() => completedTodo(todo.id)}
      />

      <h1 className={`todo-text ${todo.completed && 'completed'}`}>
        {todo.title}
      </h1>

      <button className="btn btn-edit" onClick={() => editTodo(todo.id)}>
        <FaRegEdit />
      </button>

      <button className="btn btn-delete" onClick={() => deleteTodo(todo.id)}>
        <FaTrashAlt />
      </button>
    </>
  );
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  deleteTodo,
  editTodo,
  completedTodo,
})(Task);

import { combineReducers } from 'redux';
import { ADD_TODO, DELETE, EDIT, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, title } = action.payload;
      return {
        todos: [...state.todos, { id, title, completed: false }],
      };

    case DELETE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT:
      return {
        todos: state.todos.map((todo) => {
          return todo.id !== action.payload
            ? todo
            : { ...todo, title: prompt('edit this todo', todo.title) };
        }),
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) => {
          return todo.id !== action.payload
            ? todo
            : { ...todo, completed: !todo.completed };
        }),
      };

    default: {
      return state;
    }
  }
};

export default combineReducers({
  todos: todosReducer,
});

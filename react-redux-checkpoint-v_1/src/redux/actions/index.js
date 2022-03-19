//action type
export const ADD_TODO = 'ADD_TODO';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//addTodo action creator
export const addTodo = ({ id, title }) => {
  //return an action
  return {
    type: 'ADD_TODO',
    payload: {
      id: id,
      title: title,
    },
  };
};

//deleteTodo action creator
export const deleteTodo = (id) => {
  //return action
  return {
    type: 'DELETE',
    payload: id,
  };
};

//EditTodo action creator
export const editTodo = (id) => {
  //return action
  return {
    type: 'EDIT',
    payload: id,
  };
};

//completedTodo action creator
export const completedTodo = (id) => {
  //return action
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};
import { createSlice } from '@reduxjs/toolkit';

const fullList = [];
export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],

  reducers: {
    /*--------------------action1::add-------------------------*/
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      fullList.push(newTodo);
    },
    /*--------------------action2::delete-------------------------*/
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    /*--------------------action3::edit-------------------------*/
    editTodo: (state, action) => {
      state.filter((todo) => {
        if (todo.id === action.payload) {
          todo.title = prompt('edit this todo', todo.title);
        }
        return state;
      });
    },
    /*--------------------action4::completed-------------------------*/
    completedTodo: (state, action) => {
      state.filter((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return state;
      });
    },
    /*--------------------end reducers-------------------------*/
  },
});

export const { addTodo, deleteTodo, editTodo, completedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

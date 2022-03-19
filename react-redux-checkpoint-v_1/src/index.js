import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './styles/index.css';
import './styles/TodoList.css';
import './styles/Todo.css';
//import the App component
import App from './components/App';
// redux
import { Provider } from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

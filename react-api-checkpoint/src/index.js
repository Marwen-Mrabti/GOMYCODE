import React from 'react';
import ReactDOM from 'react-dom';
//styles
import './styles/index.css';
import './styles/scrollbar.css';

// components to render
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

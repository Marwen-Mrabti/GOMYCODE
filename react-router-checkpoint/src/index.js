import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components to render
import App from './App';
//font awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
//styles
import './Styles/index.css';
import './Styles/NavigationBar.css';
import './Styles/FilmList.css';
import './Styles/FilmCard.css';
import './Styles/AddFilm.css';
import './Styles/FilmTrailer.css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

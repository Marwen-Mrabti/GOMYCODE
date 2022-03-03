// react hooks
import React, { useState } from 'react';
//react router
import { Routes, Route } from 'react-router-dom';
import FilmTrailer from './Components/FilmList/FilmTrailer';
//local components
import Main from './Components/Main';

function App() {
const [ID, setID] = useState('')
const [trailer, setTrailer] = useState('')
  return (
    <Routes>
      <Route path="/" element={<Main setID={setID} setTrailer={setTrailer} />} />
      <Route path={`/filmTrailer/:${ID}`}
        element={<FilmTrailer trailer={trailer}/>} />
    </Routes>
  );
}

export default App;

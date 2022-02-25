// react hooks
import React, { useState } from 'react';
//Data
import { movieData } from './Data/Data';
//local components
import NavigationBar from './Components/NavigationBar/NavigationBar';
import FilmList from './Components/FilmList/FilmList';
import AddFilm from './Components/AddFilm/AddFilm';

function App() {
  //states
  const [data, setData] = useState(movieData);
  const [searchList, setSearchList] = useState(data);
  const [addFilm, setAddFilm] = useState(false);
  //handlers
  const handleOnNavigationCallback = (selectedTitle, rating, reset, addNew) => {
    setAddFilm(addNew);
    reset && setSearchList(data);
    setSearchList(
      data
        .filter((movie) => movie.Rating >= rating && movie)
        .filter((movie) =>
          movie.Title.replace(/\s+/g, ' ')
            .trim()
            .toLowerCase()
            .includes(selectedTitle.replace(/\s+/g, ' ').trim().toLowerCase())
        )
    );
  };

  return (
    <div className="App">
      <NavigationBar
        searchList={searchList}
        navigationCallback={handleOnNavigationCallback}
      />
      <AddFilm
        setData={setData}
        setSearchList={setSearchList}
        addFilm={addFilm}
        setAddFilm={setAddFilm}
      />
      <FilmList searchList={searchList} />
    </div>
  );
}

export default App;

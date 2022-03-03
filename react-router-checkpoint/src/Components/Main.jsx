// react hooks
import React, { useState } from 'react';
//Data
import { movieData } from '../Data/Data';
//components
import NavigationBar from './NavigationBar/NavigationBar';
import AddFilm from './AddFilm/AddFilm';
import FilmList from './FilmList/FilmList';

function Main({setID,setTrailer}) {
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
      <FilmList searchList={searchList} setID={setID} setTrailer={setTrailer} />
    </div>
  );
}

export default Main;

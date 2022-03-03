import React, { useState } from 'react';

const NavigationBar = ({ navigationCallback, searchList }) => {
  const options = searchList.map((movie, index) => movie.Title);
  //states
  const [selectedFilm, setSelectedFilm] = useState('');
  const [rating, setRating] = useState(0);
  const [reset, setReset] = useState(false);
  const [addFilm, setAddFilm] = useState(true);

  //handlers
  const handleOnAdd = (event) => {
    event.preventDefault();
    setAddFilm(!addFilm);
    navigationCallback(selectedFilm, rating, reset, addFilm);
  };

  const handleOnReset = (event) => {
    event.preventDefault();
    setReset(true);
    setRating(0);
    setSelectedFilm('');
    navigationCallback('', 0, true, false);
    setReset(false);
  };

  const handleOnClear = (event) => {
    event.preventDefault();
    setSelectedFilm('');
    navigationCallback('', rating, reset, false);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    selectedFilm && navigationCallback(selectedFilm, rating, reset, false);
  };

  const handleOnRating = (event) => {
    event.preventDefault();
    let newRating = Number(event.target.value);
    setRating(newRating);
    navigationCallback(selectedFilm, newRating, reset, false);
  };

  return (
    <div className="main-nav">
      <button className="add-movie" onClick={handleOnAdd}>
        <i className="fa fa-plus" />
      </button>
      <h1 className="logo" onClick={handleOnReset}>
        movieState
      </h1>

      <div className="search-by-title">
        <datalist id="suggestions">
          {options.map((title, index) => (
            <option key={index}>{title}</option>
          ))}
        </datalist>
        <input
          className="user-input"
          type="text"
          autoComplete={'on'}
          spellCheck={true}
          value={selectedFilm}
          placeholder="select a movie..."
          list="suggestions"
          onChange={(event) => setSelectedFilm(event.target.value)}
        />
        <div className="controls">
          {selectedFilm && (
            <button className="fa fa-remove" onClick={handleOnClear}></button>
          )}
          <button
            className="fa fa-search"
            type="submit"
            onClick={handleOnSubmit}
          ></button>
        </div>
      </div>

      <div className="search-by-rating">
        <input
          id="rating"
          type="range"
          name="volume"
          value={rating}
          min="0"
          max="5"
          step="0.5"
          onChange={handleOnRating}
        />
      </div>
    </div>
  );
};

export default NavigationBar;

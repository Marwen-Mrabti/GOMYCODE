import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import ReactTooltip from 'react-tooltip';

function AddFilm({ setData, addFilm, setAddFilm, setSearchList }) {
  //states
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState(0);

  //handlers
  const handleOnSubmit = (event) => {
    event.preventDefault();
    let newFilm = {
      Title: title,
      Year: year,
      Rating: rating,
      imdbID: `f${Math.floor(Math.random() * 10000) + 1}`,
      Type: 'movie',
      Poster: poster,
    };
    if (newFilm.Title && newFilm.Poster && newFilm.Rating) {
      setData((prevState) => [...prevState, newFilm]);
      setSearchList((prevState) => [...prevState, newFilm]);
    }
    setAddFilm(!addFilm);
    setTitle('');
    setYear('');
    setPoster('');
    setRating(0);
  };

  return (
    <div className={`modal-add-film ${!addFilm && 'hidden'} `}>
      <form className="add-film-wrapper">
        <div className="info Title">
          <label>Title: </label>
          <input
            type="info text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="info Year">
          <label>Year: </label>
          <input
            type="month"
            min="1970-01"
            max="2025-01"
            onChange={(event) => setYear(event.target.value.slice(0, 4))}
          />
        </div>
        <div className="info Poster" data-tip="Poster path">
          <ReactTooltip />
          <label>Poster: </label>
          <input
            type="text"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />
        </div>
        <div className="info" data-tip="double Click">
          <label>Rating: </label>
          <ReactTooltip />
          <div className="rating">
            <Rating
              onClick={(rating) => setRating(rating / 20)}
              ratingValue={rating}
              initialValue={0}
              iconsCount={5}
              allowHalfIcon
              allowHover
              transition
              fillColor={'none'}
              fillColorArray={[
                'red',
                'red',
                'yellow',
                'yellow',
                'orange',
                'orange',
                '#2be2e2',
                '#2be2e2',
                'blue',
                'green',
              ]}
            />
          </div>
        </div>
        <div className="info submit">
          <input type="submit" onClick={handleOnSubmit} />
        </div>
      </form>
    </div>
  );
}

export default AddFilm;

import React from 'react';

import ReactTooltip from 'react-tooltip';
import { Rating } from 'react-simple-star-rating';
import { FaVideo } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const FilmCard = ({ movie, setTrailer, setID }) => {
  const handleOnTrailer = (ID, trailer) => {
    setID(ID);
    setTrailer(trailer);
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h1 className="movie__title">{movie.Title}</h1>
        <h2 className="movie__year">Year: {movie.Year}</h2>
        <h2>
          Rating:
          <Rating
            initialValue={movie.Rating}
            iconsCount={5}
            allowHalfIcon
            readonly
          />
        </h2>

        <Link to={`/filmTrailer/:${movie.Title}`} data-tip="watch trailer">
          <ReactTooltip />
          <button
            className="btn-link"
            onClick={() => handleOnTrailer(movie.imdbID, movie.Trailer)}
          >
            <FaVideo />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;

import React from 'react';
import { Rating } from 'react-simple-star-rating';

const FilmCard = ({ movie }) => {
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
      </div>
    </div>
  );
};

export default FilmCard;

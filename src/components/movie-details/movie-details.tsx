import React from 'react';

import './movie-details.scss';

interface MovieDetailsProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  rating: string;
  genres: string[];
  duration: string;
  description: string;
}

export default function MovieDetails({ imageUrl, movieName, releaseYear, rating, genres, duration, description }: MovieDetailsProps) {
  return (
    <div className="movie-details">
      <img className="movie-details__img" src={imageUrl} alt={movieName} />
      <div className="movie-details__info">
        <h2 className="movie-details__name">{movieName}</h2>
        <p className="movie-details__rating">{rating}</p>
        <p className='movie-details__genres'>{genres.join(', ')}</p>
        <p className="movie-details__year">{releaseYear}</p>
        <p className="movie-details__duration">{duration}</p>
        <p className="movie-details__description">{description}</p>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useMovieService } from '../../services';
import { Movie } from '../../models';
import './movie-details.scss';

interface MovieDetailsProps {
  imageUrl?: string;
  movieName?: string;
  releaseYear?: number;
  rating?: string;
  genres?: string[];
  duration?: string;
  description?: string;
  onClose: () => void;
}

export default function MovieDetails({ imageUrl, movieName, releaseYear, rating, genres, duration, description, onClose }: MovieDetailsProps) {
  const [ searchParams ] = useSearchParams();
  const { loading, getMovie } = useMovieService();
  const [ movie, setMovie] = useState<Movie | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if(movieId) {
      getMovie(movieId).then(
        movie => setMovie(movie),
      )
    }
  }, [movieId])

  return (
    <>
      { loading
        ? <span className="spinner"></span>
        : <div className="movie-details">
          <Link to={{ pathname: "/", search: searchParams.toString() }}>
            <button className="movie-details__close-button" onClick={onClose}>×</button>
          </Link>
          <img className="movie-details__img" src={movie?.imageUrl} alt={movie?.movieName} />
          <div className="movie-details__info">
            <h2 className="movie-details__name">{movie?.movieName}</h2>
            <p className="movie-details__rating">{movie?.rating}</p>
            <p className='movie-details__genres'>{movie?.genres?.join(', ')}</p>
            <p className="movie-details__year">{movie?.releaseYear}</p>
            <p className="movie-details__duration">{movie?.duration}</p>
            <p className="movie-details__description">{movie?.description}</p>
          </div>
        </div>
      }
    </>
  );
}
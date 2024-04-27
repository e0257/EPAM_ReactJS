import MovieForm from '../movie-form/movie-form';
import Dialog from '../dialog/dialog';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieService } from '../../services';
import { Movie } from '../../models';

export default function EditMovieFormDialog() {
  const { movieId } = useParams();
  const [ movie, setMovie] = useState<Movie | null>(null);
  const { loading, getMovie, editMovie } = useMovieService();
  const navigate = useNavigate();

  useEffect(() => {
    if(movieId) {
      getMovie(movieId).then(
        movie => setMovie(movie),
      )
    }
  }, [movieId])

  const handleEdit = (editedMovie: Movie) => {
    editMovie(editedMovie);
    closeDialog();
  }

  const closeDialog = () => {
    navigate('/');
  }

  return <>
    { loading
      ? <span className="spinner"></span>
      : <Dialog title="Edit Movie" onClose={closeDialog}>
          <MovieForm onSubmit={handleEdit} initialData={movie as any}></MovieForm>
        </Dialog>
    }
  </>
}
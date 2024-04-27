import MovieForm from '../movie-form/movie-form';
import Dialog from '../dialog/dialog';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieService } from '../../services';
import { Movie } from '../../models';

export default function AddMovieFormDialog() {
  const { addMovie } = useMovieService();
  const navigate = useNavigate();

  const handleAdd = (addedMovie: Movie) => {
    addMovie(addedMovie);
    closeDialog()
  }

  const closeDialog = () => {
    navigate('/');
  }

  return <>
    <Dialog title="Add Movie" onClose={closeDialog}>
      <MovieForm onSubmit={handleAdd}></MovieForm>
    </Dialog>
  </>
}
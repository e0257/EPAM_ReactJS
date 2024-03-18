import React, { MouseEvent , useState } from 'react';
import Dialog from '../dialog/dialog';
import MovieForm from '../movie-form/movie-form';

import './movie-tile.scss';

interface MovieTileProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  genres: string[];
  onClick: () => void;
}

export default function MovieTile({ imageUrl, movieName, releaseYear, genres, onClick }: MovieTileProps) {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const openContextMenu = (e: MouseEvent) => {
    e.stopPropagation();
    setContextMenuVisible(true);
  };

  const closeContextMenu = (e: MouseEvent) => {
    e.stopPropagation();
    setContextMenuVisible(false);
  };

  const handleEdit = (e: MouseEvent) => {
    setIsEditDialogOpen(true);
    closeContextMenu(e);
  };

  const handleDelete = (e: MouseEvent) => {
    closeContextMenu(e);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  const onEditSubmit = (data: any) => {
    console.log('data =', data);
  }

  return (
    <div className='movie-tile' onClick={onClick}>
      <img className='movie-tile__img' src={imageUrl} alt={movieName} />
      <div className='movie-tile__info'>
        <h2 className='movie-tile__name'>{movieName}</h2>
        <p className='movie-tile__year'>{releaseYear}</p>
      </div>
      <p className='movie-tile__genres'>{genres.join(', ')}</p>

      {!isContextMenuVisible &&
          <button
            className='movie-tile__context-menu-btn'
            onClick={openContextMenu}
          >•••</button>
      }

      {isContextMenuVisible && (
        <div className='context-menu'>
          <button className='context-menu--close' onClick={closeContextMenu}>X</button>
          <button className='context-menu--edit' onClick={handleEdit}>Edit</button>
          <button className='context-menu--delete' onClick={handleDelete}>Delete</button>
        </div>
      )}

      {isEditDialogOpen && (
        <Dialog title="Edit Movie" onClose={closeEditDialog}>
          <MovieForm onSubmit={onEditSubmit}></MovieForm>
        </Dialog>
      )}
    </div>
  );
}
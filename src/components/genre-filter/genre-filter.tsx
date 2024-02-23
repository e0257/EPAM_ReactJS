import React from 'react';
import './genre-filter.scss';

interface GenreProps {
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
}

export default function GenreFilter({ genres, selectedGenre, onSelect }: GenreProps) {
  return (
    <div className="genre-list">
      {genres.map(genre =>
        <span
          key={genre}
          className={`genre-list-item ${selectedGenre === genre ? 'genre-list-item--active' : ''}`}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </span>
      )}
    </div>
  );
};

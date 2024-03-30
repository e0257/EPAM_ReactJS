import React from 'react';
import './genre-filter.scss';

interface GenreProps {
  genres: { label: string, value: string }[];
  selectedGenre?: string;
  onSelect: (genre: string) => void;
}

export default function GenreFilter({ genres, selectedGenre, onSelect }: GenreProps) {
  return (
    <div className="genre-list">
      {genres.map(genre =>
        <span
          key={genre.label}
          className={`genre-list-item ${selectedGenre === genre.value ? 'genre-list-item--active' : ''}`}
          onClick={() => onSelect(genre.value)}
        >
          {genre.label}
        </span>
      )}
    </div>
  );
};

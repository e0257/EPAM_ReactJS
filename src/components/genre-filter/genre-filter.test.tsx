import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreFilter from './genre-filter';

describe('GenreFilter component', () => {
    const genres = [
        { label: 'Action', value: 'Action' },
        { label: 'Romance', value: 'Romance' },
        { label: 'Thriller', value: 'Thriller' }
    ];
    const selectedGenre = 'Adventure';
    const onSelect = jest.fn();

    it('should renders all genres passed in props', () => {
        render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);

        genres.forEach(genre => {
            expect(screen.getByText(genre.label)).toBeInTheDocument();
        });
    });

    it('should highlights a selected genre passed in props', () => {
        render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);
        const selectedGenreElement = screen.getByText(selectedGenre);

        expect(selectedGenreElement).toHaveClass('genre-list-item--active');
    });

    it('should call onSelect with correct genre after click on genre', () => {
        render(<GenreFilter genres={genres} onSelect={onSelect} />);
        const genreButton = screen.getByText(selectedGenre);

        fireEvent.click(genreButton);

        expect(onSelect).toHaveBeenCalledWith(selectedGenre);
    });
});

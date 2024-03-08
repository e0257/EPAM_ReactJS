import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreFilter from './genre-filter';

describe('GenreFilter component', () => {
    const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
    const selectedGenre = 'Adventure';
    const onSelect = jest.fn();

    it('should renders all genres passed in props', () => {
        const { getByText } = render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);

        genres.forEach(genre => {
            expect(getByText(genre)).toBeInTheDocument();
        });
    });

    it('should highlights a selected genre passed in props', () => {
        const { getByText } = render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);
        const selectedGenreElement = getByText(selectedGenre);

        expect(selectedGenreElement).toHaveClass('genre-list-item--active');
    });

    it('should call onSelect with correct genre after click on genre', () => {
        const { getByText } = render(<GenreFilter genres={genres} onSelect={onSelect} />);
        const genreButton = getByText(selectedGenre);

        fireEvent.click(genreButton);

        expect(onSelect).toHaveBeenCalledWith(selectedGenre);
    });
});

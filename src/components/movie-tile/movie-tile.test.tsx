import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './movie-tile';

describe('MovieTile component', () => {
  const mockedClick = jest.fn();
  const movieData= {
    id: 123,
    imageUrl: '/sample.jpg',
    movieName: 'Sample Movie',
    releaseYear: 2001,
    genres: ['Horror', 'Comedy'],
    onClick: mockedClick,
  };

  it('should display movie name correctly', () => {
    const { getByText } = render(<MovieTile {...movieData} />);
    expect(getByText(movieData.movieName)).toBeInTheDocument();
  });

  it('should display genres correctly', () => {
    const { getByText } = render(<MovieTile {...movieData} />);
    expect(getByText(movieData.genres.join(', '))).toBeInTheDocument();
  });

  it('should trigger onClick when clicked', () => {
    const { getByRole } = render(<MovieTile {...movieData} />);
    fireEvent.click(getByRole('img', { name: movieData.movieName }));
    expect(mockedClick).toHaveBeenCalled();
  });
});
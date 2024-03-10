import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './movie-details';

describe('MovieDetails component', () => {
  const movieData= {
    imageUrl: '/sample.jpg',
    movieName: 'Sample Movie',
    releaseYear: 2001,
    rating: 'PG-13',
    genres: ['Horror', 'Comedy'],
    duration: '2hr 13min',
    description: 'This is a sample movie.'
  };

  it('should display movie details correctly', () => {
    const { getByText, getByRole } = render(<MovieDetails {...movieData} />);

    expect(getByText(movieData.movieName)).toBeInTheDocument();
    expect(getByText(movieData.rating)).toBeInTheDocument();
    expect(getByText(movieData.genres.join(', '))).toBeInTheDocument();
    expect(getByText(String(movieData.releaseYear))).toBeInTheDocument();
    expect(getByText(movieData.duration)).toBeInTheDocument();
    expect(getByText(movieData.description)).toBeInTheDocument();

    const image = getByRole('img', { name: movieData.movieName }) as HTMLImageElement;

    expect(image.src).toContain(movieData.imageUrl);
  });
});

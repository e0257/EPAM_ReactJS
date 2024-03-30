import React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<MovieDetails {...movieData} onClose={()=>{}} />);

    expect(screen.getByText(movieData.movieName)).toBeInTheDocument();
    expect(screen.getByText(movieData.rating)).toBeInTheDocument();
    expect(screen.getByText(movieData.genres.join(', '))).toBeInTheDocument();
    expect(screen.getByText(String(movieData.releaseYear))).toBeInTheDocument();
    expect(screen.getByText(movieData.duration)).toBeInTheDocument();
    expect(screen.getByText(movieData.description)).toBeInTheDocument();

    const image = screen.getByRole('img', { name: movieData.movieName }) as HTMLImageElement;

    expect(image.src).toContain(movieData.imageUrl);
  });
});

import Counter from '../counter/counter';
import Search from '../search/search';
import GenreFilter from '../genre-filter/genre-filter';
import { useState } from 'react';
import MovieTile from '../movie-tile/movie-tile';
import SortControl, { SortOptionType } from '../sort-control/sort-control';
import MovieDetails from '../movie-details/movie-details';

import './home-page.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  }

  const handleSelect = (genre: string) => {
    setSelectedGenre(genre);
    console.log('Selected genre:', genre);
  }

  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [sortOption, setSortOption] = useState<SortOptionType>('Release Date');

  const movies = [
    { imageUrl: '/temporary-movie-img.png', movieName: 'Movie1', releaseYear: 2020, rating: '8.8', duration: '2h 30min', genres: ['Action', 'Adventure'], description: 'Very interesting movie' },
    { imageUrl: '/temporary-movie-img2.png', movieName: 'Movie2', releaseYear: 2019, rating: '9.8', duration: '1h 35min', genres: ['Comedy'], description: 'Funniest movie ever' },
    { imageUrl: '/temporary-movie-img.png', movieName: 'Movie3', releaseYear: 2021, rating: '7.7', duration: '2h 10min', genres: ['Action', 'Adventure'], description: 'Very interesting movie' },
    { imageUrl: '/temporary-movie-img2.png', movieName: 'Movie4', releaseYear: 2017, rating: '6.6', duration: '3h 00min', genres: ['Comedy'], description: 'Funniest movie ever' },
  ];

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  }


  return (
    <>
      <Counter initialValue={10}/>
      <Search initialQuery='initial search' onSearch={handleSearch}/>
      <div className="filter-sort-controls">
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={handleSelect} />
        <SortControl selectedOption={sortOption} onOptionChange={setSortOption} />
      </div>
      { selectedMovie && <MovieDetails {...selectedMovie}/> }
      <div className="movie-list">
        {movies.map(movie =>
          <MovieTile
            key={movie.movieName}
            imageUrl={movie.imageUrl}
            movieName={movie.movieName}
            releaseYear={movie.releaseYear}
            genres={movie.genres}
            onClick={() => handleMovieClick(movie)}
          />
        )}
      </div>
    </>
  );
}

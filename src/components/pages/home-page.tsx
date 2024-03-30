import Search from '../search/search';
import GenreFilter from '../genre-filter/genre-filter';
import { useEffect, useState } from 'react';
import MovieTile from '../movie-tile/movie-tile';
import SortControl, { SortOptionType } from '../sort-control/sort-control';
import MovieDetails from '../movie-details/movie-details';

import './home-page.scss';
import { useMovieService } from '../../services';
import { Movie } from '../../models';

const genres = [
  { label: 'All', value: '' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Crime', value: 'Crime' }
];

export function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setMoviesSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [sortOption, setSortOption] = useState<SortOptionType>('Release Date');

  const { loading, getMovies } = useMovieService();

  useEffect(() => {
    getMovies({
      filter: [selectedGenre],
      search: searchQuery,
      sortBy: sortOption
    }).then(
      (movies) => setMovies(movies)
    )
  }, [selectedGenre, searchQuery, sortOption])

  const handleSearch = (query: string) => {
    setMoviesSearchQuery(query)
    console.log('Search query:', query);
  }

  const handleSelect = (genre: string) => {
    setSelectedGenre(genre);
    console.log('Selected genre:', genre);
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  }

  const handleMovieDetailsClose = () => {
    setSelectedMovie(null);
  }

  return (
    <>
      <div className="search-container">
        { selectedMovie
          ? <MovieDetails {...selectedMovie} onClose={handleMovieDetailsClose}/>
          : <Search initialQuery={searchQuery} onSearch={handleSearch}/>
        }
      </div>
      <div className="filter-sort-controls">
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={handleSelect} />
        <SortControl selectedOption={sortOption} onOptionChange={setSortOption} />
      </div>
      { loading
        ? <span className="spinner"></span>
        : <div className="movie-list">
          {movies.map((movie: Movie) =>
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
      }
    </>
  );
}

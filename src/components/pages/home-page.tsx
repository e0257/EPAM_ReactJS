import Search from '../search/search';
import GenreFilter from '../genre-filter/genre-filter';
import React, { useEffect, useState } from 'react';
import MovieTile from '../movie-tile/movie-tile';
import SortControl, { SortOptionType } from '../sort-control/sort-control';
import MovieDetails from '../movie-details/movie-details';
import AddMovieFormDialog from '../add-movie-form/add-movie-form';
import { useMovieService } from '../../services';
import { Movie } from '../../models';
import { Routes, Route, useSearchParams, useNavigate, useParams, Outlet, Link } from 'react-router-dom';
import EditMovieFormDialog from '../edit-movie-form/edit-movie-form';

import './home-page.scss';

const genres = [
  { label: 'All', value: '' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Crime', value: 'Crime' }
];

export function HomePage() {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState(searchParams.get('genre') || '');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setMoviesSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [sortOption, setSortOption] = useState<SortOptionType>(searchParams.get('sort') as SortOptionType || 'Release Date');

  const { loading, getMovies } = useMovieService();

  const navigate = useNavigate();

  useEffect(() => {
    getMovies({
      filter: [selectedGenre],
      search: searchQuery,
      sortBy: sortOption
    }).then(
      (movies) => setMovies(movies)
    )
  }, [selectedGenre, searchQuery, sortOption])

  useEffect(() => {
    const movie = movies.find(m => m.id === Number(movieId));
    if (movie) {
      setSelectedMovie(movie);
    }
  }, [])

  const handleSearch = (query: string) => {
    setMoviesSearchQuery(query)
    setSearchParams((prevParam) => {
      prevParam.set("search", query);

      return prevParam;
    });
  }

  const handleSelect = (genre: string) => {
    setSelectedGenre(genre);
    setSearchParams((prevParam) => {
      prevParam.set("genre", genre);

      return prevParam;
    })
  }

  const handleSortOption = (sortOption: SortOptionType) => {
    setSortOption(sortOption);
    setSearchParams((prevParam) => {
      prevParam.set("sort", sortOption);

      return prevParam;
    })
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    navigate(`/${movie.id}?${searchParams.toString()}`);
  }

  const handleMovieDetailsClose = () => {
    setSelectedMovie(null);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="search-container">
            <div className="search-container__add-movie">
              <Link className="search-container__add-movie--link" to="new">Add Movie</Link>
            </div>
            <Search initialQuery={searchQuery} onSearch={handleSearch}/>
            <Outlet></Outlet>
          </div>
        }>
          <Route path="/new" element={
            <AddMovieFormDialog />
          }></Route>
        </Route>
        <Route path="/:movieId" element={<MovieDetails {...selectedMovie} onClose={handleMovieDetailsClose}/>}/>
        <Route path="/:movieId/edit" element={<EditMovieFormDialog/>}/>
      </Routes>
      <div className="filter-sort-controls">
        <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={handleSelect} />
        <SortControl selectedOption={sortOption} onOptionChange={handleSortOption} />
      </div>
      { loading
        ? <span className="spinner"></span>
        : <div className="movie-list">
          {movies.map((movie: Movie) =>
            <MovieTile
              key={movie.movieName}
              id={movie.id}
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

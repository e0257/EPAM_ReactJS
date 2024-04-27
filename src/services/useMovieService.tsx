import { useHttp } from '../hooks/http.hook';
import { Movie, MovieDTO, MovieRequestParams } from '../models';

interface MovieService {
  loading: boolean;
  error: string | null;
  getMovies: (params: Partial<MovieRequestParams>) => Promise<Movie[]>,
  getMovie: (id: number | string) => Promise<Movie>,
  addMovie: (movie: Movie) => void;
  editMovie: (movie: Movie) => void;
}

export function useMovieService(): MovieService {
  const { loading, request, error } = useHttp();

  const apiBase = 'http://localhost:4000';

  const getMovies = async (params: Partial<MovieRequestParams> = {}): Promise<Movie[]> => {
    const queryParams = new URLSearchParams(params as Record<string, string>);
    const reqUrl = `${apiBase}/movies?${queryParams.toString()}`;

    const res = await request(reqUrl);

    return res?.data?.map(transformMovie);
  }

  const getMovie = async (id: number | string): Promise<Movie> => {
    const reqUrl = `${apiBase}/movies/${id}`;

    const res = await request(reqUrl);

    return transformMovie(res);
  }

  const addMovie = (movie: Movie) => {
    console.log('api add movie =', movie)
  }

  const editMovie = (movie: Movie) => {
    console.log('api edit movie =', movie)
  }

  const transformMovie = (movie: MovieDTO): Movie => {
    return {
      id: movie.id,
      movieName: movie.title,
      imageUrl: movie.poster_path,
      releaseDate: movie.release_date,
      releaseYear: new Date(movie.release_date).getFullYear(),
      rating: `${movie.vote_average}`,
      duration: `${movie.runtime}`,
      genres: movie.genres,
      description: movie.overview,
    }
  }

  return {
    loading,
    error,
    getMovies,
    getMovie,
    addMovie,
    editMovie
  }
}
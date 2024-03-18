import React from 'react';
import { useForm } from 'react-hook-form';
import './movie-form.scss';

interface MovieInfo {
  title: string;
  movieUrl: string;
  genre: string;
  overview: string;
  releaseDate: string;
  rating: string;
  timing: string;
}

export interface MovieFormProps {
  initialData?: MovieInfo;
  onSubmit: (data: MovieInfo) => void;
}

export default function MovieForm({ initialData, onSubmit }: MovieFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MovieInfo>({ defaultValues: initialData });

  return (
    <form className="movie-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="movie-form-item movie-form-item--title">
        <label htmlFor="title">Title:</label>
        <input id="title" {...register("title", { required: true })} />
        {errors.title && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--release-date">
        <label htmlFor="releaseDate">Release Date:</label>
        <input id="releaseDate" type="date" {...register("releaseDate", { required: true })} />
        {errors.releaseDate && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--url">
        <label htmlFor="movieUrl">Movie Url:</label>
        <input id="movieUrl" {...register("movieUrl", { required: true })} />
        {errors.movieUrl && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--rating">
        <label htmlFor="rating">Rating:</label>
        <input id="rating" {...register("rating", { required: true })} />
        {errors.rating && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--genre">
        <label htmlFor="genre">Genre:</label>
        <select id="genre" {...register("genre", { required: true })}>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
        </select>
        {errors.genre && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--timing">
        <label htmlFor="timing">Timing:</label>
        <input id="timing" {...register("timing", { required: true })} />
        {errors.timing && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--overview">
        <label htmlFor="overview">Overview:</label>
        <textarea id="overview" {...register("overview")} />
        {errors.overview && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-cta">
        <button className="btn btn--reset" type="reset" onClick={() => reset()}>Reset</button>
        <button className="btn btn--submit" type="submit">Submit</button>
      </div>
    </form>
  );
};
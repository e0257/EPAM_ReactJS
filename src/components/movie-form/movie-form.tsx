import React from 'react';
import { useForm } from 'react-hook-form';
import { Movie } from '../../models';
import './movie-form.scss';

export interface MovieFormProps {
  initialData?: Movie;
  onSubmit: (data: Movie) => void;
}

export default function MovieForm({ initialData, onSubmit }: MovieFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Movie>({ defaultValues: initialData });

  console.log('initialData =', initialData)
  return (
    <form className="movie-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="movie-form-item movie-form-item--title">
        <label htmlFor="title">Title:</label>
        <input id="title" {...register("movieName", { required: true })} />
        {errors.movieName && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--release-date">
        <label htmlFor="releaseDate">Release Date:</label>
        <input id="releaseDate" type="date" {...register("releaseDate", { required: true })} />
        {errors.releaseDate && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--url">
        <label htmlFor="movieUrl">Movie Url:</label>
        <input id="movieUrl" {...register("imageUrl", { required: true })} />
        {errors.imageUrl && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--rating">
        <label htmlFor="rating">Rating:</label>
        <input id="rating" {...register("rating", { required: true })} />
        {errors.rating && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--genre">
        <label htmlFor="genre">Genre:</label>
        <select id="genre" {...register("genres", { required: true })}>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
        </select>
        {errors.genres && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--timing">
        <label htmlFor="timing">Timing:</label>
        <input id="timing" {...register("duration", { required: true })} />
        {errors.duration && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-item movie-form-item--overview">
        <label htmlFor="overview">Overview:</label>
        <textarea id="overview" {...register("description")} />
        {errors.description && <p className="movie-form-item__error">This field is required</p>}
      </div>

      <div className="movie-form-cta">
        <button className="btn btn--reset" type="reset" onClick={() => reset()}>Reset</button>
        <button className="btn btn--submit" type="submit">Submit</button>
      </div>
    </form>
  );
};
import { DeleteResult } from "typeorm";
import { Movie } from "../../entities/movies";

interface Imovies {
  id?: string;
  title: string;
  director: string;
  released: Date;
  duration: string;
}

interface IMovieRepo {
  saveMovie: (Movie: Imovies) => Promise<Imovies>;
  findMovietitle: (title: string) => Promise<Movie>;
  findMovies: () => Promise<Imovies[]>;
  updateMovie: (movie: Imovies, reqBody: object) => Promise<any>;
  deleteMovie: (title: string) => Promise<DeleteResult>;
}

export { Imovies, IMovieRepo };

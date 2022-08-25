import { getRepository, Repository } from "typeorm";
import { Movie } from "../../entities/movies";
import { Imovies, IMovieRepo } from "./interfaceMovies";

class MovieRepository implements IMovieRepo {
  private ormrepository: Repository<Movie>;

  constructor() {
    this.ormrepository = getRepository(Movie);
  }

  saveMovie = async (MovieNer: Imovies) =>
    await this.ormrepository.save(MovieNer);

  findMovietitle = async (title: string) =>
    await this.ormrepository.findOne({ title: title });

  findMovies = async () => await this.ormrepository.find();

  findbyDirector = async (director: string) =>
    await this.ormrepository.find({ director: director });
  updateMovie = async (Movie: Imovies, reqBody: object) =>
    await this.ormrepository.update(Movie, reqBody);
  deleteMovie = async (title: string) =>
    await this.ormrepository.delete({ title });
}

export { MovieRepository, Imovies, IMovieRepo };

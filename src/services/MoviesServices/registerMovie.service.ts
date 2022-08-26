import { Request, Response } from "express";
import { Movie } from "../../entities/movies";
import { MovieRepository, Imovies } from "../../repositories";

const registerMovieService = async (req: Request, res: Response) => {
  let verifyMovieDuration = req.validated.duration;

  let timeVerifyHour = parseInt(verifyMovieDuration.split(":")[0]);

  let timeVerifyMinutes = parseInt(verifyMovieDuration.split(":")[1]);

  let timeVerifySeconds = parseInt(verifyMovieDuration.split(":")[2]);

  let response = res;

  if (
    timeVerifyHour < 0 ||
    timeVerifyHour > 24 ||
    timeVerifyMinutes < 0 ||
    timeVerifyMinutes > 59 ||
    timeVerifySeconds < 0 ||
    timeVerifySeconds > 59
  ) {
    response = res
      .status(400)
      .json({ msg: "the movie is not registered! time format is invalid" });
  } else {
    const movie: Movie = {
      ...req.validated,
    };

    const toRegistered: Imovies = await new MovieRepository().saveMovie(movie);

    response = res
      .status(201)
      .json({ msg: "the movie is registered!", movie: toRegistered });
  }

  return response;
};

export default registerMovieService;

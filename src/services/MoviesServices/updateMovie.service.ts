import { Request, Response } from "express";
import { MovieRepository } from "../../repositories";

const updateMovieService = async (req: Request, res: Response) => {
  const movieInfo = await new MovieRepository().findMovietitle(
    req.params.title
  );

  let verifyMovieDuration = movieInfo.duration;

  if (req.validated.duration) {
    verifyMovieDuration = req.validated.duration;
  }

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
    const updateMovie = await new MovieRepository().updateMovie(
      movieInfo,
      req.validated
    );

    response = res.status(200).json({ smg: "movie updated" });
  }
  return response;
};

export default updateMovieService;

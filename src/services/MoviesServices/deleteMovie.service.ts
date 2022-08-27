import { Request, Response } from "express";
import { MovieRepository } from "../../repositories";

const deleteMovieService = async (req: Request, res: Response) => {
  const findMovie = await new MovieRepository().findMovietitle(
    req.params.title
  );
  let responser = res;
  if (!findMovie) {
    responser = res
      .status(404)
      .json({ msg: "movie not found cant be deleted" });
  } else {
    const deletMovie = await new MovieRepository().deleteMovie(findMovie.title);
    responser = res
      .status(200)
      .json({ smg: "the movie is deleted", movie: findMovie });
  }
  return responser;
};

export default deleteMovieService;

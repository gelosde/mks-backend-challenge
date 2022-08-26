import { Request, Response } from "express";

import { MovieRepository } from "../../repositories";

const allMoviesService = async (req: Request, res: Response) => {
  const allMovies = await new MovieRepository().findMovies();

  return res.status(200).json(allMovies);
};
export default allMoviesService;

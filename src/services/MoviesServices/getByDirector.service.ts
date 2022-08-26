import { Request, Response } from "express";

import { MovieRepository } from "../../repositories";

const getByDirectorService = async (req: Request, res: Response) => {
  const directorMovies = await new MovieRepository().findbyDirector(
    req.params.director
  );
  let responser = res;
  if (!directorMovies) {
    responser = res.status(404).json({ msg: "director not found" });
  } else {
    responser = res.status(200).json(directorMovies);
  }
  return responser;
};
export default getByDirectorService;

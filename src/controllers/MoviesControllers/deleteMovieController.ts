import { Request, Response } from "express";
import { deleteMovieService } from "../../services";

const deleteMovieController = async (req: Request, res: Response) => {
  const movieDeleter = await deleteMovieService(req, res);

  return movieDeleter;
};
export default deleteMovieController;

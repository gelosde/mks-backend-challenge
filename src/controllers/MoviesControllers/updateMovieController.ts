import { Request, Response } from "express";
import { updateMovieService } from "../../services";

const updateMovieController = async (req: Request, res: Response) => {
  const toUpdate = await updateMovieService(req, res);

  return toUpdate;
};

export default updateMovieController;

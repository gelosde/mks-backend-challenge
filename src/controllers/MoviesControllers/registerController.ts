import { Request, Response } from "express";
import { registerMovieService } from "../../services";

const registerMovieController = async (req: Request, res: Response) => {
  const register = await registerMovieService(req, res);

  return register;
};
export default registerMovieController;

import { Request, Response } from "express";
import { allMoviesService } from "../../services";

const allMoviescontroller = async (req: Request, res: Response) => {
  const listmovies = await allMoviesService(req, res);

  return listmovies;
};

export default allMoviescontroller;

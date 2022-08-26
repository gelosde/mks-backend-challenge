import { Request, Response } from "express";
import { getByTitleService } from "../../services";

const getTitleMovieControler = async (req: Request, res: Response) => {
  const TitleMovie = await getByTitleService(req, res);

  return TitleMovie;
};

export default getTitleMovieControler;

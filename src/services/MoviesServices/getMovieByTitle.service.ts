import { Request, Response } from "express";
import { MovieRepository } from "../../repositories";

const getByTitleService = async (req: Request, res: Response) => {
  const movieInfo = await new MovieRepository().findMovietitle(
    req.params.title
  );
  let responser = res;
  if (!movieInfo) {
    responser = res.status(404).json({ msg: "movie not found" });
  } else {
    responser = res.status(200).json(movieInfo);
  }
  return responser;
};

export default getByTitleService;

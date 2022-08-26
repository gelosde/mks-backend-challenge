import { Request, Response } from "express";
import { getByDirectorService } from "../../services";

const getBydirector = async (req: Request, res: Response) => {
  const bydirector = await getByDirectorService(req, res);

  return bydirector;
};

export default getBydirector;

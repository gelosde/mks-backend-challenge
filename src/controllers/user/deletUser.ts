import { Request, Response } from "express";

import { deleteUserService } from "../../services";

const deleteSelfUser = async (req: Request, res: Response) => {
  const deleter = await deleteUserService(req);
  return res.status(200).json(deleter);
};

export default deleteSelfUser;

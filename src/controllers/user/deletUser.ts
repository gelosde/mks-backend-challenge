import { Request, Response } from "express";

import { deleteUserService } from "../../services";

const deleteSelfUser = async (req: Request) => {
  const deleter = await deleteUserService(req);
  return deleter;
};

export default deleteSelfUser;

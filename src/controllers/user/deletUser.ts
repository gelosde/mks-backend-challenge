import { Request, Response } from "express";

import { deleteUserService } from "../../services";

const deleteSelfUser = async (req: Request, res: Response) => {
  const deletedUser = req.email;
  const deleter = await deleteUserService(req);
  let delInfo = res.status(200).json("Userdeleted " + deletedUser);
  if (deleter === undefined) {
    delInfo = res.status(404).json("User not registered probabli is deleted");
  }
};

export default deleteSelfUser;

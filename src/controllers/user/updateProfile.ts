import { Request, Response } from "express";
import { updateUserService } from "../../services";

const updateUser = async (req: Request, res: Response) => {
  const updater = await updateUserService(req);
  return res.status(200).json({ msg: "User updated", updatedInfo: updater });
};
export default updateUser;

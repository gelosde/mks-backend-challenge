import { Request, Response } from "express";
import { getProfileUserService } from "../../services";

const getProfile = async (req: Request, res: Response) => {
  const profile = await getProfileUserService(req);
  return res.status(200).json(profile);
};

export default getProfile;

import { Request } from "express";
import { UserRepository } from "../../repositories";

const getProfileUserService = async (req: Request) => {
  const getProfile = await new UserRepository().findEmail(req.email);

  return getProfile;
};

export default getProfileUserService;

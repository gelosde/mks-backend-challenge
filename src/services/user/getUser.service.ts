import { Request } from "express";
import { UserRepository } from "../../repositories";

const getProfileUserService = async (req: Request) => {
  const getProfile = await new UserRepository().findEmail(req.email);

  return {
    id: getProfile["id"],
    email: getProfile["email"],
    password: getProfile["password"],
    isAdm: getProfile["isAdm"],
  };
};

export default getProfileUserService;

import { Request } from "express";
import { UserRepository } from "../../repositories";

const updateUserService = async (req: Request) => {
  const userInfo = await new UserRepository().findEmail(req.email);

  const updateUser = await new UserRepository().updateUser(
    userInfo,
    req.validated
  );

  return updateUser;
};

export default updateUserService;

import { Request } from "express";
import { UserRepository } from "../../repositories";

const updateUserService = async (req: Request) => {
  const userInfo = await new UserRepository().findEmail(req.email);

  const updateUser = await new UserRepository().updateUser(
    userInfo,
    req.validated
  );
  let updaterInfo = {};
  if (req.validated.email) {
    updaterInfo = await new UserRepository().findEmail(req.validated.email);
  } else {
    updaterInfo = await new UserRepository().findEmail(req.email);
  }
  return updaterInfo;
};

export default updateUserService;

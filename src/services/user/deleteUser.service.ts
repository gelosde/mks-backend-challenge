import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const delUser = await new UserRepository().findUserByEmail(req.email);
  let deleterStatus: any = delUser;
  if (!delUser) {
    deleterStatus = undefined;
  }

  const deleteUser = await new UserRepository().deleteUser(req.email);

  return deleterStatus;
};

export default deleteUserService;

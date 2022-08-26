import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const delUser = await new UserRepository().findUserByEmail(req.email);
  let deleterStatus = delUser;

  const deleteUser = await new UserRepository().deleteUser(req.email);

  return deleteUser;
};

export default deleteUserService;

import { Request } from "express";
import { UserRepository } from "../../repositories";

const deleteUserService = async (req: Request) => {
  const delUser = await new UserRepository().findUserByEmail(req.email);

  const deleteUser = await new UserRepository().deleteUser(req.email);

  return { msg: "user deleted", user: delUser };
};

export default deleteUserService;

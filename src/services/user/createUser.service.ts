import { Request } from "express";
import { User } from "../../entities/User";
import { UserRepository, Iuser } from "../../repositories";
import bcrypt = require("bcryptjs");

const createUserService = async (req: Request) => {
  const users: User = {
    ...req.validated,
  };

  users.password = bcrypt.hashSync(users.password, 10);

  const Registerede = await new UserRepository().saveUser(users);

  return Registerede;
};

export default createUserService;

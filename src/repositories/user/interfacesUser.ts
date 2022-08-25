import { DeleteResult } from "typeorm";
import { User } from "../../entities/User";

interface Iuser {
  id?: string;
  email: string;
  password: string;
  isAdm: boolean;
}

interface IsuerRepo {
  saveUser: (character: Iuser) => Promise<Iuser>;
  findUserByEmail: (email: string) => Promise<User>;
  findUsers: () => Promise<Iuser[]>;
  updateUser: (user: Iuser, reqBody: object) => Promise<any>;
  deleteUser: (email: string) => Promise<DeleteResult>;
}

export { Iuser, IsuerRepo };

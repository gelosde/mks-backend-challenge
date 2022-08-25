import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { Iuser, IsuerRepo } from "./interfacesUser";

class UserRepository implements IsuerRepo {
  private ormrepository: Repository<User>;

  constructor() {
    this.ormrepository = getRepository(User);
  }

  saveUser = async (UserNer: Iuser) => await this.ormrepository.save(UserNer);

  findUserByEmail = async (email: string) =>
    await this.ormrepository.findOne({ email: email });
  findUsers = async () => await this.ormrepository.find();

  findEmail = async (email: string) =>
    await this.ormrepository.findOne(
      { email: email },
      { relations: ["character"] }
    );
  updateUser = async (user: Iuser, reqBody: object) =>
    await this.ormrepository.update(user, reqBody);
  deleteUser = async (email: string) =>
    await this.ormrepository.delete({ email });
}

export { UserRepository, Iuser, IsuerRepo };

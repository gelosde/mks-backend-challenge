import { Request, Response } from "express";
import { login } from "../../services";

const loginController = async (req: Request, res: Response) => {
  const logger = await login(req, res);

  return logger;
};
export default loginController;

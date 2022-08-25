import { Request, Response } from "express";
import { createUserService } from "../../services";

const register = async (req: Request, res: Response) => {
  const Registerede = await createUserService(req.validated);

  return res.status(201).json({
    id: Registerede.id,
    email: Registerede.email,
    password: Registerede.password,
  });
};
export default register;

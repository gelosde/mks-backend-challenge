import { hashSync } from "bcryptjs";
import * as yup from "yup";

const updateUserSchema = yup.object().shape({
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .optional(),
  email: yup.string().email().optional(),
});

export default updateUserSchema;

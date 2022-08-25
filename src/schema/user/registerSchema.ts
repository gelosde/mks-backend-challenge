import * as yup from "yup";

const schemaRegister = yup.object().shape({
  password: yup.string().required(),
  email: yup.string().required().email(),
});

export default schemaRegister;

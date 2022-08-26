import * as yup from "yup";

const schemaRegisterMovie = yup.object().shape({
  title: yup.string().required(),
  director: yup.string().required(),
  released: yup.date().required(),
  duration: yup.string().required(),
});
export default schemaRegisterMovie;

import * as yup from "yup";

const schemaUpdateMovie = yup.object().shape({
  title: yup.string().required(),
  director: yup.string().required(),
  released: yup.date().required(),
  duration: yup.string().required(),
});

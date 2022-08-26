import { Router } from "express";
import * as schemas from "../../schema";
import * as midle from "../../middlewares";
import * as controlers from "../../controllers";

const user = Router();

user.get("/profile", midle.authenticatedUser, controlers.getProfile);

user.get(
  "/listMovies",
  midle.authenticatedUser,
  controlers.allMoviescontroller
);

user.get(
  "/moviesbytitle/:title",
  midle.authenticatedUser,
  controlers.getTitleMovieControler
);

user.get(
  "/listByDirector/:director",
  midle.authenticatedUser,
  controlers.getBydirector
);

user.post(
  "/register",
  midle.validateSchema(schemas.schemaRegister),
  midle.checkExistRegister,
  controlers.register
);
user.post(
  "/login",
  midle.validateSchema(schemas.schemaLogin),
  controlers.loginController
);

user.patch(
  "/update/profile",
  midle.authenticatedUser,
  midle.validateSchema(schemas.updateUserSchema),
  controlers.updateUser
);
user.delete("/delete", midle.authenticatedUser, controlers.deleteSelfUser);
export default user;

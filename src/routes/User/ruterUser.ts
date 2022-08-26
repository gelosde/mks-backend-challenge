import { Router } from "express";

import * as schemas from "../../schema";
import * as midle from "../../middlewares";
import * as controlers from "../../controllers";

const user = Router();

user.get("/user/profile", midle.authenticatedUser, controlers.getProfile);

user.get(
  "/user/listMovies",
  midle.authenticatedUser,
  controlers.allMoviescontroller
);

user.get(
  "/user/MoviesbyTitle/:title",
  midle.authenticatedUser,
  controlers.getTitleMovieControler
);

user.get(
  "/user/listByDirector/:director",
  midle.authenticatedUser,
  controlers.getBydirector
);

user.post(
  "/user/register",
  midle.validateSchema(schemas.schemaRegister),
  midle.checkExistRegister,
  controlers.register
);
user.post("/user/login", midle.validateSchema(schemas.schemaLogin));

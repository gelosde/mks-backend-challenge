import { Router } from "express";
import * as schemas from "../../schema";
import * as midle from "../../middlewares";
import * as controlers from "../../controllers";

const admRouter = Router();

admRouter.post(
  "/newMovie",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  midle.validateSchema(schemas.schemaRegisterMovie),
  controlers.registerMovieController
);
admRouter.patch(
  "/update/:title",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  midle.validateSchema(schemas.schemaUpdateMovie),
  controlers.updateMovieController
);

admRouter.delete(
  "/delete/:title",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  controlers.deleteMovieController
);

export default admRouter;

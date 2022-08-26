import { Router } from "express";
import * as schemas from "../../schema";
import * as midle from "../../middlewares";
import * as controlers from "../../controllers";

const admRouter = Router();

admRouter.post(
  "/admin/newMovie",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  midle.validateSchema(schemas.schemaRegisterMovie),
  controlers.registerMovieController
);
admRouter.patch(
  "/admin/update/:title",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  midle.validateSchema(schemas.updateUserSchema)
);

admRouter.delete(
  "/admin/delete/:title",
  midle.authenticatedUser,
  midle.verifyUserPermission,
  controlers.deleteMovieController
);

export default admRouter;

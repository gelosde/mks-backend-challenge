import deleteSelfUser from "./user/deletUser";
import register from "./user/registerUser";
import getProfile from "./user/getProfile";
import updateUser from "./user/updateProfile";
import updateMovieController from "./MoviesControllers/updateMovieController";
import deleteMovieController from "./MoviesControllers/deleteMovieController";
import getBydirector from "./MoviesControllers/getByDirectorController";
import getTitleMovieControler from "./MoviesControllers/getByTitleController";
import allMoviescontroller from "./MoviesControllers/getAllMoviesController";
import registerMovieController from "./MoviesControllers/registerController";

export {
  getBydirector,
  getTitleMovieControler,
  allMoviescontroller,
  registerMovieController,
  deleteSelfUser,
  register,
  getProfile,
  updateUser,
  updateMovieController,
  deleteMovieController,
};

import createUserService from "./user/createUser.service";
import deleteUserService from "./user/deleteUser.service";
import getProfileUserService from "./user/getUser.service";
import updateUserService from "./user/updateUser.service";
import deleteMovieService from "./MoviesServices/deleteMovie.service";
import getByDirectorService from "./MoviesServices/getByDirector.service";
import getByTitleService from "./MoviesServices/getMovieByTitle.service";
import allMoviesService from "./MoviesServices/getAllMovies.service";
import updateMovieService from "./MoviesServices/updateMovie.service";
import registerMovieService from "./MoviesServices/registerMovie.service";
import login from "./user/login.service";
export {
  createUserService,
  deleteUserService,
  updateUserService,
  getProfileUserService,
  deleteMovieService,
  getByDirectorService,
  getByTitleService,
  allMoviesService,
  updateMovieService,
  registerMovieService,
  login,
};

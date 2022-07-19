import { manageFilmServices } from "../../services/manageFilmServices";
import { getListFilms } from "./manageFilmsReducer";

export const getListFilmsAction = (nameMovie = "") => {
  return async (dispatch, getState) => {
    try {
      const { data, status } = await manageFilmServices.getListFilmService(nameMovie);
      if (status === 200) {
        dispatch(getListFilms(data.content));
      }
    } catch (err) {
      console.log("getListFilms fail", err);
    }
  };
};

import { Dispatch } from "redux";
import axios from "axios";
import { ProfileAction, ProfilesActionsTypes } from "../types/profile";

export const fetchProfile = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({ type: ProfilesActionsTypes.FETCH_PROFILE });
      const response = await axios.get("http://localhost:3000/profile");
      dispatch({
        type: ProfilesActionsTypes.FETCH_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProfilesActionsTypes.FETCH_PROFILE_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};

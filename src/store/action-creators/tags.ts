import { Dispatch } from "redux";
import axios from "axios";
import { TagAction, TagsActionsTypes } from "../types/tags";

export const fetchTags = () => {
  return async (dispatch: Dispatch<TagAction>) => {
    try {
      dispatch({ type: TagsActionsTypes.FETCH_TAGS });
      const response = await axios.get(`http://localhost:3000/tags`);
      dispatch({
        type: TagsActionsTypes.FETCH_TAGS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TagsActionsTypes.FETCH_TAGS_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};

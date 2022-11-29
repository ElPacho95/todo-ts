import { TodoAction, TodosActionsTypes } from "../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.FETCH_TODOS });
      const response = await axios.get(" http://localhost:3000/todos");
      dispatch({
        type: TodosActionsTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.FETCH_TODOS_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};

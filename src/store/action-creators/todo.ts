import { Dispatch } from "redux";
import axios from "axios";
import {
  ChangeCheckboxAction,
  DeleteTodoAction,
  NewTodoAction,
  TodoAction,
  TodosActionsTypes,
} from "../types/todo";

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

export const fetchNewTodo = (body: {
  completed: boolean;
  title: string;
  tags: string[];
}) => {
  return async (dispatch: Dispatch<NewTodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.FETCH_ADD_TODOS });
      const response = await axios.post(" http://localhost:3000/todos", body);
      dispatch({
        type: TodosActionsTypes.FETCH_ADD_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.FETCH_ADD_TODOS_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};

export const fetchDeleteTodo = (id: number) => {
  return async (dispatch: Dispatch<DeleteTodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.FETCH_DELETE_TODOS });
      await axios.delete(`http://localhost:3000/todos/${id}`);
      dispatch({
        type: TodosActionsTypes.FETCH_DELETE_TODOS_SUCCESS,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.FETCH_DELETE_TODOS_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};
export const fetchChangeCheckbox = (completed: boolean, id: number) => {
  return async (dispatch: Dispatch<ChangeCheckboxAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX });
      await axios.patch(`http://localhost:3000/todos/${id}`, { completed });
      dispatch({
        type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX_SUCCESS,
        payload: { completed, id },
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX_ERROR,
        payload: "Ошибка при загрузке данных",
      });
    }
  };
};

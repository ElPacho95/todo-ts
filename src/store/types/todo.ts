export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
  tags: string[];
}
export interface TodoState {
  todos: ITodos[];
  loading: boolean;
  error: null | string;
}

export enum TodosActionsTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  FETCH_ADD_TODOS = "FETCH_ADD_TODOS",
  FETCH_ADD_TODOS_SUCCESS = "FETCH_ADD_TODOS_SUCCESS",
  FETCH_ADD_TODOS_ERROR = "FETCH_ADD_TODOS_ERROR",
  FETCH_DELETE_TODOS = "FETCH_DELETE_TODOS",
  FETCH_DELETE_TODOS_SUCCESS = "FETCH_DELETE_TODOS_SUCCESS",
  FETCH_DELETE_TODOS_ERROR = "FETCH_DELETE_TODOS_ERROR",
  FETCH_CHANGE_CHECKBOX = "FETCH_CHANGE_CHECKBOX",
  FETCH_CHANGE_CHECKBOX_SUCCESS = "FETCH_CHANGE_CHECKBOX_SUCCESS",
  FETCH_CHANGE_CHECKBOX_ERROR = "FETCH_CHANGE_CHECKBOX_ERROR",
}
interface FetchTodosAction {
  type: TodosActionsTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
  type: TodosActionsTypes.FETCH_TODOS_SUCCESS;
  payload: ITodos[];
}
interface FetchTodosErrorAction {
  type: TodosActionsTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface FetchAddTodosAction {
  type: TodosActionsTypes.FETCH_ADD_TODOS;
}
interface FetchAddTodosSuccessAction {
  type: TodosActionsTypes.FETCH_ADD_TODOS_SUCCESS;
  payload: ITodos;
}
interface FetchAddTodosErrorAction {
  type: TodosActionsTypes.FETCH_ADD_TODOS_ERROR;
  payload: string;
}
interface FetchDeleteTodosAction {
  type: TodosActionsTypes.FETCH_DELETE_TODOS;
}
interface FetchDeleteTodosSuccessAction {
  type: TodosActionsTypes.FETCH_DELETE_TODOS_SUCCESS;
  payload: number;
}
interface FetchDeleteTodosErrorAction {
  type: TodosActionsTypes.FETCH_DELETE_TODOS_ERROR;
  payload: string;
}
interface FetchChangeCheckboxAction {
  type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX;
}
interface FetchChangeCheckboxSuccessAction {
  type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX_SUCCESS;
  payload: {
    id: number,
    checked: boolean
  };
}
interface FetchChangeCheckboxErrorAction {
  type: TodosActionsTypes.FETCH_CHANGE_CHECKBOX_ERROR;
  payload: string;
}
export type TodoAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;

export type NewTodoAction =
  | FetchAddTodosAction
  | FetchAddTodosSuccessAction
  | FetchAddTodosErrorAction;

export type DeleteTodoAction =
  | FetchDeleteTodosAction
  | FetchDeleteTodosSuccessAction
  | FetchDeleteTodosErrorAction;

export type ChangeCheckboxAction =
  | FetchChangeCheckboxAction
  | FetchChangeCheckboxSuccessAction
  | FetchChangeCheckboxErrorAction;

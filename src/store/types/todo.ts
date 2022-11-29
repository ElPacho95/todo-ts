export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
}
export enum TodosActionsTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}
interface FetchTodosAction {
  type: TodosActionsTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
  type: TodosActionsTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FetchTodosErrorAction {
  type: TodosActionsTypes.FETCH_TODOS_ERROR;
  payload: string;
}
export type TodoAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;

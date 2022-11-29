import { TodoAction, TodosActionsTypes, TodoState } from "../types/todo";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodosActionsTypes.FETCH_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case TodosActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  ChangeCheckboxAction,
  DeleteTodoAction,
  NewTodoAction,
  TodoAction,
  TodosActionsTypes,
  TodoState,
} from "../types/todo";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction | NewTodoAction | DeleteTodoAction | ChangeCheckboxAction
): TodoState => {
  switch (action.type) {
    case TodosActionsTypes.FETCH_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case TodosActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodosActionsTypes.FETCH_ADD_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_ADD_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [action.payload, ...state.todos],
      };
    case TodosActionsTypes.FETCH_ADD_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodosActionsTypes.FETCH_DELETE_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_DELETE_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case TodosActionsTypes.FETCH_DELETE_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                completed: action.payload.completed,
              }
            : item
        ),
      };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX_ERROR:
      return { ...state, loading: false, error: action.payload, todos: [] };
    default:
      return state;
  }
};

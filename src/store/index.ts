import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { customerReducer } from "./reducers/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todo: todoReducer,
  // customer: customerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

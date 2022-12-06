import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { profileReducer } from "./reducers/profileReducer";
import { todoReducer } from "./reducers/todoReducer";

import { tagsReducer } from "./reducers/tagsReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  profile: profileReducer,
  tags: tagsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

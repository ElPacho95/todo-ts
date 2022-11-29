import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoReducer} from "./todoReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    todo: todoReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
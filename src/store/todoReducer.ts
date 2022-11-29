import {Action, ActionCreator, AnyAction, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

interface ITodo {
    todo: string[],
    loading: boolean,
}

const initialState: ITodo = {
    todo: [],
    loading: true
}

export const todoReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {

    }
}

export const loadTodos: ActionCreator<
    ThunkAction<Promise<Action>, ITodo, void>
    > = () => {
    return async (dispatch: Dispatch<ITodo>): Promise<Action> => {
        dispatch({type: "pending"})
    }
}
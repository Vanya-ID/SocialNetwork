import {ActionsTypes} from "./state";
import {getAuthMe} from "./authReducer";
import {ThunkAction} from "redux-thunk";

export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

export type initialStateType = typeof initialState

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return {...state}
    }
}

export const setInitializedSuccess = (): ThunkAction<void, initialStateType, unknown, ActionsTypes> => (dispatch) => {
    let pr = dispatch(getAuthMe())
    pr.then(() => {
        dispatch(setInitialized())
    })
}

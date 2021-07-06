import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogsReducer} from "./dialogsPageReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form'
import {ActionsTypes} from "./state";
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type ReduxStoreType = ReturnType<typeof rootReducer>

export type  AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStoreType, unknown, ActionsTypes | FormAction>

export default store;
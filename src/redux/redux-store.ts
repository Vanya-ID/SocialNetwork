import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogsReducer} from "./dialogsPageReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   userPage: usersReducer,
   auth: authReducer
})
declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type ReduxStoreType= ReturnType<typeof rootReducer>

export default store;
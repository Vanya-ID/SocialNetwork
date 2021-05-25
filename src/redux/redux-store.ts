import {combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogsReducer} from "./dialogsPageReducer";

let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer
})
declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer,composeEnhancers());

export type ReduxStoreType= ReturnType<typeof rootReducer>

export default store;
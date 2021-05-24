import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogsReducer} from "./dialogsPageReducer";

let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer
})

let store = createStore(rootReducer);

export type ReduxStoreType= ReturnType<typeof rootReducer>

export default store;
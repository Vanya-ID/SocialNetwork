import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profilePageReducer";
import {dialogsReducer} from "./dialogsPageReducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer
})

let store = createStore(reducers);

export type StoreType= ReturnType<typeof reducers>

export default store;
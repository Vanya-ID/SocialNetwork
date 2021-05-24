import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {ReduxStoreType} from "./redux/redux-store";
import {Provider} from "react-redux";

let renderEntireTree = (state: ReduxStoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                 /*   state={state}
                    dispatch={store.dispatch.bind(store)}*/
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

reportWebVitals();

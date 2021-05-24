import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

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

reportWebVitals();

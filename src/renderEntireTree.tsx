import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, updatePostText} from "./redux/state";

export let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updatePostText = {updatePostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


reportWebVitals();

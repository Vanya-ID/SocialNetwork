import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

 let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import {ActionsTypes} from "./redux/state";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./compomemts/Dialogs/DialogsContainer";
import UsersContainer from "./compomemts/Users/UsersContainer";
import {BrowserRouter,Route} from "react-router-dom";
import ProfileContainer from "./compomemts/Profile/ProfileContainer";

type AppPropsType = {
    state: ReduxStoreType
    dispatch: (action: ActionsTypes) => void
}

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                           />}/>
                    <Route path='/users'
                           render={() => <UsersContainer
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

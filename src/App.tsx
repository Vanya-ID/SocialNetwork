import React from 'react';
import './App.css';
import Navbar from "./compomemts/Navbar/Navbar";
import {ActionsTypes} from "./redux/state";
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./compomemts/Dialogs/DialogsContainer";
import UsersContainer from "./compomemts/Users/UsersContainer";
import {BrowserRouter,Route} from "react-router-dom";
import ProfileContainer from "./compomemts/Profile/ProfileContainer";
import HeaderContainer from "./compomemts/Header/HeaderContainer";
import Login from "./compomemts/Login/Login";

type AppPropsType = {
    state: ReduxStoreType
    dispatch: (action: ActionsTypes) => void
}

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
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
                    <Route path='/login'
                           render={() => <Login
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

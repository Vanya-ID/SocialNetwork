import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import Profile from "./compomemts/Profile/Profile";
import Dialogs from "./compomemts/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes} from "./redux/state";
import {reduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./compomemts/Dialogs/DialogsContainer";

type AppPropsType = {
    state: reduxStoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

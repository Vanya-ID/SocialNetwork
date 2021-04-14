import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import Profile from "./compomemts/Profile/Profile";
import Dialogs from "./compomemts/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";

type AppPropsType ={
    state: RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage ={props.state.dialogsPage}
                    />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage ={props.state.profilePage}
                           />}/>
                    <Route path='/news' component={Dialogs}/>
                    <Route path='/music' component={Dialogs}/>
                    <Route path='/settings' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

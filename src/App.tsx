import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import Profile from "./compomemts/Profile/Profile";
import Dialogs from "./compomemts/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";
import Friends from './compomemts/Friends/Friends';

type AppPropsType ={
    state: RootStateType
    addPost: (post: string)=> void
    updatePostText : (newText: string)=> void
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
                               addPost={props.addPost}
                               updatePostText={props.updatePostText}
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

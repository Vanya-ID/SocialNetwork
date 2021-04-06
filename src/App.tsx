import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import Profile from "./compomemts/Profile/Profile";
import Dialogs from "./compomemts/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
       <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content '>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/news' component={Dialogs}/>
                    <Route  path='/music' component={Dialogs}/>
                    <Route  path='/settings' component={Dialogs}/>
                </div>
             </div>
       </BrowserRouter>
            );
            }

            export default App;

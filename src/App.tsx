import React from 'react';
import './App.css';
import Header from "./compomemts/Header/Header";
import Navbar from "./compomemts/Navbar/Navbar";
import Profile from "./compomemts/Profile/Profile";
import Dialogs from "./compomemts/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content '>
                <Profile/>
            </div>
        </div>
    );
}

export default App;

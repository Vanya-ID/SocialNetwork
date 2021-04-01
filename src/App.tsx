import React from 'react';
import './App.css';
import Header from "./compomemts/Header";
import Navbar from "./compomemts/Navbar";
import Profile from "./compomemts/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from "../compomemts/Navbar/Navbar";
import DialogsContainer from "../compomemts/Dialogs/DialogsContainer";
import UsersContainer from "../compomemts/Users/UsersContainer";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "../compomemts/Profile/ProfileContainer";
import HeaderContainer from "../compomemts/Header/HeaderContainer";
import Login from "../compomemts/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {setInitializedSuccess} from "../redux/appReducer";
import store, {ReduxStoreType} from "../redux/redux-store";
import Preloader from "../compomemts/common/preloader/Preloader";

type mapDispatchToPropsType = {
    setInitializedSuccess: () => void
}
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.setInitializedSuccess()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
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
}

const mapStateToProps = (state: ReduxStoreType) => ({
    initialized: state.app.initialized
})


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        setInitializedSuccess
    })
)(App);

const MainApp = (props: any) => {
   return  <React.StrictMode>
       <BrowserRouter>
           <Provider store={store}>
               <AppContainer/>
           </Provider>
       </BrowserRouter>
   </React.StrictMode>
}
export default MainApp

import React from 'react';
import './App.css';
import Navbar from "../compomemts/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "../compomemts/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {setInitializedSuccess} from "../redux/appReducer";
import store, {ReduxStoreType} from "../redux/redux-store";
import Preloader from "../compomemts/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import("../compomemts/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("../compomemts/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("../compomemts/Users/UsersContainer"))
const Login = React.lazy(() => import("../compomemts/Login/Login"))

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
                        <React.Suspense fallback={<Preloader/>}>
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
                        </React.Suspense>
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
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default MainApp

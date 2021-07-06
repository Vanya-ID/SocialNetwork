import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {getAuthMe, logout, setAuthUserData} from "../../redux/authReducer";

type mapDispatchToPropsType = {
    setAuthUserData: (id: number | null,
                      email: string | null,
                      login: string | null,
                      isAuth: boolean ) => void
    getAuthMe: () => void
    logout: () => void
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {
    setAuthUserData,
    getAuthMe,
    logout
})(HeaderContainer);

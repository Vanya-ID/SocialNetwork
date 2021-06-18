import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {getAuthMe, setAuthUserData} from "../../redux/authReducer";

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    getAuthMe: () => void
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthMe()
    }

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
    getAuthMe
})(HeaderContainer);

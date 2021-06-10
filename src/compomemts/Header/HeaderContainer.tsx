import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
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
    setAuthUserData
})(HeaderContainer);

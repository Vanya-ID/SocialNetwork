import {Redirect} from "react-router";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {ReduxStoreType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: ReduxStoreType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {

       let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
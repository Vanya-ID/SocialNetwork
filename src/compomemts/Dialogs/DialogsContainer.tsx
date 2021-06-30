import React from 'react';
import { messagesPageType} from "../../redux/state";
import { sendMessageAC} from '../../redux/dialogsPageReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: messagesPageType
}

type mapDispatchToPropsType = {
    sendMessageOnClick: (text: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessageOnClick: (newMessage: string) => {
            dispatch(sendMessageAC(newMessage))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
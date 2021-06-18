import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ActionsTypes, messagesPageType, postItemsType} from "../../redux/state";
import {updateMessageAC, sendMessageAC} from '../../redux/dialogsPageReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage: messagesPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    changeMessageBody: (text: string) => void
    sendMessageOnClick: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeMessageBody: (body: string) => {
            dispatch(updateMessageAC(body))
        },
        sendMessageOnClick: () => {
            dispatch(sendMessageAC())
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;
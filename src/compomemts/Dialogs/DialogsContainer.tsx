import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ActionsTypes, messagesPageType, postItemsType} from "../../redux/state";
import {updateMessageAC, sendMessageAC} from '../../redux/dialogsPageReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: messagesPageType
}

type mapDispatchToPropsType = {
    changeMessageBody: (text: string) => void
    sendMessageOnClick: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
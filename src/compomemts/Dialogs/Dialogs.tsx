import React, {ChangeEvent, KeyboardEvent} from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Messaage/Message';
import {messagesPageType} from "../../redux/state";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/Forms/Forms";
import {maxLengthCreator, requiresField} from "../../utils/validatos";

type DialogsType = {
    dialogsPage: messagesPageType
    sendMessageOmClick: () => void
    changeNewMessageText: (newText: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

    let DialogElements = props.dialogsPage.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id}/>)

    let MessageElements = props.dialogsPage.messages.map((m, i) =>
        <Message key={i} message={m.message}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        props.sendMessageOnClick(values.newMessageBody)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogElements}
            </div>
            <div className={d.messages}>
                <div>{MessageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMessageBody: string
}
let maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        placeholder={'Your message'}
                        name={'newMessageBody'}
                        component={Textarea}
                        validate={[requiresField, maxLength50]}
                    />
                </div>
                <div>
                    <button>send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
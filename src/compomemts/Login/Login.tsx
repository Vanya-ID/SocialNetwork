import React from 'react';
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {Input} from "../common/Forms/Forms";
import {requiresField} from "../../utils/validatos";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {ReduxStoreType} from "../../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form action="" onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={"Login"}
                name={'login'}
                type="text"
                component={Input}
                validate={[requiresField]}
                autoComplete={'on'}
            />
        </div>
        <div>
            <Field
                placeholder={"password"}
                name={'password'}
                type="password"
                component={Input}
                validate={[requiresField]}
                autoComplete={'on'}
            />
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component={Input}/>
            remember me
        </div>
        <div>
            <button>
                Log
            </button>
        </div>
    </form>;
}

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (login: string,
            password: string,
            rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: ReduxStoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login)
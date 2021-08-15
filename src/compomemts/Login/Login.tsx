import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from "../common/Forms/Forms";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {ReduxStoreType} from "../../redux/redux-store";
import f from '../common/Forms/Forms.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props
    return <form action="" onSubmit={handleSubmit}>
        {createField('email', 'email', 'email', true)}
        {createField('password', 'password', 'password', true)}
        <div>
            {createField('', 'rememberMe', 'checkbox')}
            remember me
        </div>
        <div>
            {
                error &&
                <div className={f.formSummaryError}>
                    {error}
                </div>
            }

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
    const {login, isAuth} = props
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login)
import React from 'react';
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {authAPI} from "../../api/api";
import {Input} from "../common/Forms/Forms";
import {requiresField} from "../../utils/validatos";

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

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        authAPI.login(formData.login, formData.password).then(data => {
            console.log(data)
        })
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login
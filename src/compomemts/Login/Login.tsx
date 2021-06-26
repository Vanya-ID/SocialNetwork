import React from 'react';
import {reduxForm, InjectedFormProps, Field} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form action="" onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={'login'} type="text" component={'input'}/>
        </div>
        <div>
            <Field placeholder={"password"} name={'password'} type="password" component={'input'}/>
        </div>
        <div>
            <Field type="checkbox" name={'rememberMe'} component={'input'}/>
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
        console.log(formData)
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login
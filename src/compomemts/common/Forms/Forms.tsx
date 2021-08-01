import f from './Forms.module.css'
import React from "react";
import {Field} from "redux-form";
import {requiresField} from "../../../utils/validators/validatos";

const Element = (Element: string) => ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error

    return (
        <div className={f.form + " " + (showError ? f.error : "")}>
            <Element {...input} {...props} />
            {showError && <span> {meta.error} </span>}
        </div>
    );
};

export const Textarea = Element('textarea')

export const Input = Element('input')

export const createField = (placeholder: string,
                            name: string,
                            type: string,
                            required = false) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            type={type}
            component={Input}
            validate={required && [requiresField]}
            autoComplete={'on'}
        />
    </div>
)
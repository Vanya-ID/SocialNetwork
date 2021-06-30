import f from './Forms.module.css'
import React from "react";

const Element = (Element: string) => ({input, meta, ...props}: any) => {
    console.log(input)
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
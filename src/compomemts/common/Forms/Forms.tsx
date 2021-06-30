import f from './Forms.module.css'

export const Textarea = ({input, meta, ...props}: any) => {

    const showError = meta.touched && meta.error

    return (
        <div className={f.form + ' ' +  (showError ? f.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}
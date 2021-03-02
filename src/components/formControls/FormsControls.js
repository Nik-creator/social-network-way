import c from "./FormsControls.module.css"


export const Textarea = ({input, meta, ...props}) =>{
    const showError = meta.touched && meta.error;
    return(
        <div>
            <div>
                <textarea {...input} {...props} className={showError ? c.error : ''}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props})=>{
    const showError = meta.touched && meta.error;
    return(
        <div>
            <input {...input} {...props} className={showError ? c.error : ''}/>
            {showError && <span className={c.spanError}>{meta.error}</span>}
        </div>
    )
}

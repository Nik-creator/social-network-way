import {Field, reduxForm} from "redux-form";
import c from "./Message.module.css"

const AddNewMessageForm = (props)=>{
    const style = {
        position: "absolute",
        top: "300px",
    }
    return(
        <form style={style} onSubmit={props.handleSubmit}>
            <div>
                <Field name='message' placeholder={'Напишите сообщение'} component={'textarea'} className={c.input}/>
            </div>
            <button>send</button>

        </form>
    )
}


const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddNewMessageForm)




const Message = (props)=>{
    const style = {
        position: 'relative',
    }
    const onSubmit = (formData) =>{
        props.fetchingMessage(formData.message)
    }
    return (
        <div style={style}>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Message;
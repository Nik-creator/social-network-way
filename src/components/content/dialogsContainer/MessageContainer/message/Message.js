import {Field, reduxForm} from "redux-form";
import c from "./Message.module.css"
import {Textarea} from "../../../../formControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const AddNewMessageForm = (props)=>{
    const style = {
        position: "absolute",
        top: "300px",
    }

    return(
        <form style={style} onSubmit={props.handleSubmit}>
            <div>
                <Field name='message'
                       placeholder={'Напишите сообщение'}
                       component={Textarea}
                       className={c.input}
                       validate={[requiredField, maxLength50]}
                />

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
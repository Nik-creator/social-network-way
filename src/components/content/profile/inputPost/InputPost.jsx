import c from "./InputPost.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../formControls/FormsControls";



const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props)=>{
    const {handleSubmit} = props;
    return(
        <form onSubmit={handleSubmit}>
            <div>My post</div>
            <div>
                <Field component={Textarea} placeholder='your post' name='profilePost' validate={[requiredField, maxLength30]}/>
            </div>
            <button>Add Post</button>
        </form>
    )
}


const AddPostReduxForm = reduxForm({
    form: 'addProfilePosts'
})(AddPostForm)


const InputPost = (props)=>{

    const onSubmit = (formData)=> {
        props.addPost(formData.profilePost)
    }
    return(
        <>
            <AddPostReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default InputPost;

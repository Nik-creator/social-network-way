import c from "./InputPost.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";





const AddPostForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>My post</div>
            <div>
                <Field component='input' placeholder='your post' name='profilePost'/>
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

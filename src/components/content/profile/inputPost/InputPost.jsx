import c from "./InputPost.module.css";
import React from "react";
import {connect} from "react-redux"
import {addPost} from "../../../../redux/actions/addBooks";
const InputPost = (props)=>{
    const {addNewPost} = props;
    let newPostElement = React.createRef()
    function HeaderClick(){
        let postText = newPostElement.current.value;
        addNewPost(postText)
        newPostElement.current.value = "";

    }
    const style={
        marginBottom:"50px"
    }
    return (
        <>
            <form style={style}>
                <label className={c.lable}>My posts</label>
                <input className={c.input} ref={newPostElement}/>
                <button type='button' className={c.button} onClick={()=>HeaderClick()}>Add post</button>
            </form>
        </>
    )
}
export default connect(null,
    dispatch =>({
        addNewPost: (post) => {
            dispatch(addPost(post))
        }
    })
    )(InputPost);
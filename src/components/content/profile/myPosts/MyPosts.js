import c from "./MyPosts.module.css";
import InputPost from "../inputPost/InputPost";
import {connect} from "react-redux";
import OutputPost from "./outputPost";
import {addPost} from "../../../../redux/reducers/ProfileReducer";


const MyPosts = (props)=>{
    return(
        <div className={c.wrapper}>
            <InputPost addPost={props.addPost}/>
            <OutputPost post={props.post} />
        </div>
    )
}



export default connect(state=>({
    post: state.profile.post
}), {addPost})(MyPosts);
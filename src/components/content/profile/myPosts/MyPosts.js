import c from "./MyPosts.module.css";
import InputPost from "../inputPost/InputPost";
import {connect} from "react-redux";
import OutputPost from "./outputPost";

const MyPosts = ({post})=>{
    return(
        <div className={c.wrapper}>
            <InputPost />
            <OutputPost post={post}/>
        </div>
    )
}



export default connect(state=>({
    post: state.profile.post
}), null)(MyPosts);
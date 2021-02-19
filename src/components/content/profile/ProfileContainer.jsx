import React from "react";
import ProfileImg from "./profileImg/ProfileImg";
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";
import * as axios from "axios";
import {fetchUsersProfileAva} from "../../../redux/reducers/ProfileReducer";
import {withRouter} from "react-router-dom";





class ProfileContainer extends React.Component {

   componentDidMount() {
       debugger;
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentUsersProfile}`).then(response=>{
        this.props.fetchAva(response.data.photos.small)
       });
   }



    render(){


        return(
            <>
                <div>
                    <ProfileImg img={this.props.usersProfileAva}/>
                    <MyPosts/>
                </div>
            </>
        )
    }
}


let mapStateToProps = (state)=>{
    return {
        currentUsersProfile: state.profile.currentUsersProfile,
        usersProfileAva: state.profile.usersProfileAva
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        fetchAva: (img) => {
            dispatch(fetchUsersProfileAva(img))
        }
    }
}

let UrlProfileComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(UrlProfileComponent);

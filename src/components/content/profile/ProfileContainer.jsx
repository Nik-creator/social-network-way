import React from "react";
import MyPosts from "./myPosts/MyPosts";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../../redux/reducers/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withRedirect} from "../../../HOC/withRedirect";
import {compose} from "redux";
import MyProfile from "./myProfile/MyProfile";







class ProfileContainer extends React.Component {

   componentDidMount() {
       this.props.getUserProfile(this.props.currentUsersProfile)
       this.props.getUserStatus(this.props.currentUsersProfile);
   }



    render(){


        return(
            <>
                <div>
                    <MyProfile img={this.props.usersProfileAva} updateStatus={this.props.updateStatus} status={this.props.status}/>
                    <MyPosts />

                </div>
            </>
        )
    }
}


let mapStateToProps = (state)=>{
    return {
        currentUsersProfile: state.profile.currentUsersProfile,
        usersProfileAva: state.profile.usersProfileAva,
        isAuth: state.auth.isAuth,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withRedirect
)(ProfileContainer)


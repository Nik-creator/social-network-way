import React from "react";
import {connect} from "react-redux";
import {
    getUnfollow, getUsers, toggleButton, getFollow
} from "../../../redux/reducers/UserReducer";
import Users from "./users/Users";
import {Preloader} from "../../Preloder/Preloader";
import {fetchCurrentUsersProfile} from "../../../redux/reducers/ProfileReducer";
import {compose} from "redux";
import {withRedirect} from "../../../HOC/withRedirect";






class UsersContainer extends React.Component{


    componentDidMount(){
        this.props.getUsers(this.props.currentPages, this.props.PageSize )

    };



    fetchingUserProfile = (id)=>{
        this.props.fetchCurrentUsersProfile(id)
    }

    handlerClick = (pageNumber)=>{
        this.props.getUsers(pageNumber, this.props.PageSize )
    }



    render(){
        return(
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Users {...this.props}
                           handlerClick={this.handlerClick}
                           fetchingUserProfile={this.fetchingUserProfile}

                    />
                }
            </>
        )}
}



let mapStateToProps = (state)=>{
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPages: state.users.currentPages,
        isFetching: state.users.isFetching,
        isFollowing: state.users.isFollowing,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,
    {
        fetchCurrentUsersProfile, toggleButton,
        getUsers, getUnfollow, getFollow
    }),
    // withRedirect,
    )(UsersContainer)





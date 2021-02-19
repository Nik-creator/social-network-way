import React from "react";
import {connect} from "react-redux";
import {
    fetchingUsers,
    followAction,
    setCurrentUsers,
    setTotalCounter,
    setUsers,
    unfollowAction
} from "../../../redux/reducers/UserReducer";
import Users from "./users/Users";
import * as axios from "axios";
import {Preloader} from "../../Preloder/Preloader";
import {fetchCurrentUsersProfile} from "../../../redux/reducers/ProfileReducer";





class UsersContainer extends React.Component{


    componentDidMount(){
        this.props.fetchingUsers(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.fetchingUsers(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCounter(response.data.totalCount)

            });

    };



    fetchingUserProfile = (id)=>{
        this.props.fetchCurrentUsersProfile(id)
    }

    handlerClick = (pageNumber)=>{
        this.props.changePage(pageNumber);
        this.props.fetchingUsers(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.fetchingUsers(false)
                this.props.setUsers(response.data.items);

            });

    }



    render(){
        return(
            <>
                {this.props.isFetching ?
               <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               handlerClick={this.handlerClick}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               currentPages={this.props.currentPages}
               users={this.props.users}
                      fetchingUserProfile={this.fetchingUserProfile}
               />

               : <Preloader/>
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
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps,
    {follow: followAction, unfollow: unfollowAction, setUsers, changePage: setCurrentUsers, setTotalCounter, fetchingUsers, fetchCurrentUsersProfile
    }

    )(UsersContainer);




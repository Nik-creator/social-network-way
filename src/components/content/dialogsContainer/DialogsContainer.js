import React from "react";
import {connect} from "react-redux"
import {withRedirect} from "../../../HOC/withRedirect";
import {compose} from "redux";
import DialogsUsersContainer from "./dialogsUsersContainer/DialogsUsersContainer";
import MessageContainer from "./MessageContainer/MessageContainer";
import c from "./DialogsContainer.module.css"


const DialogsContainer = (props)=> {



    return (
        <div className={c.wrapper}>
            <DialogsUsersContainer />
            <MessageContainer />
        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, null),
    // withRedirect
)(DialogsContainer)

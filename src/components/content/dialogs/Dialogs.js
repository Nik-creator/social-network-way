import React from "react";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {withRedirect} from "../../../HOC/withRedirect";
import {compose} from "redux";

const Dialogs = (props)=>{



    return(
        <div>
            <div>Тут будут диалоги</div>
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
)(Dialogs)

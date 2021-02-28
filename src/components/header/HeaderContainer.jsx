import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe, setUsersData} from "../../redux/reducers/authReducer";
import * as axios from "axios";
import {authAPI} from "../API";




class HeaderContainer extends React.Component {



    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}





let mapStateToProps = (state)=>{
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {getAuthMe,
})(HeaderContainer);
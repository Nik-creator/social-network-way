import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Header from "./Header";
import {connect} from "react-redux";
import {setUsersData} from "../../redux/reducers/authReducer";
import * as axios from "axios";




class HeaderContainer extends React.Component {



    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true
        })
            .then(response =>{
                if(response.data.response === 0){
                    this.props.getAuth(response.data.data)
                }

            })
    }

    render() {
        debugger;
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

let mapDispatchToProps = (dispatch) =>{
    return{
        getAuth: (data)=>{
            dispatch(setUsersData(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
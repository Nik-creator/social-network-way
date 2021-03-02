import {DELETE_USER_LOGIN, SET_USERS_DATA} from "../actions/ActionTypes";
import {authAPI} from "../../components/API";
import {stopSubmit} from "redux-form";

let initialState = {
    id: 0,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = initialState, action )=>{
    switch(action.type){
        case SET_USERS_DATA:
            return{
                ...state,
                ...action.payload,
                isAuth: true
            }
        case DELETE_USER_LOGIN:
            return{
                ...state,
                ...action.payload,
                isAuth: false
            }
        default:
            return{
                ...state
            }
    }
}

export const setUsersData = (data)=>({type: SET_USERS_DATA, payload:data })
export const logoutUser = (id, email, login)=>({type: DELETE_USER_LOGIN, payload:{id, email, login}})

export const getAuthMe = ()=>(dispatch)=>{
       return authAPI.Me()
            .then(data =>{
                if(data.resultCode === 0){
                    dispatch(setUsersData(data.data))
                }

            })
    }



export const loginThunk = (email, password, rememberMe)=>{
    return(dispatch)=>{
        authAPI.login(email, password, rememberMe).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setUsersData())
                // authAPI.Me().then(data =>{
                //     if(data.resultCode === 0){
                //         dispatch(setUsersData(data.data))
                //     }
                // })
            }else{
                let errorName = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                dispatch(stopSubmit('login', {_error: errorName}))
            }

        })
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        authAPI.logout().then(response=>{
            if(response.data.resultCode === 0){
                dispatch(logoutUser(null, null, null))
            }
        })
    }
}

export default AuthReducer;
import {SET_USERS_DATA} from "../actions/ActionTypes";
import {authAPI} from "../../components/API";

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
        default:
            return{
                ...state
            }
    }
}

export const setUsersData = (data)=>({type: SET_USERS_DATA, payload:data })

export const getAuthMe = ()=>{
    return (dispatch)=>{
        authAPI.Me()
            .then(data =>{
                if(data.resultCode === 0){
                    dispatch(setUsersData(data.data))
                }

            })
    }
}


export default AuthReducer;
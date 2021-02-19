import {SET_USERS_DATA} from "../actions/ActionTypes";

let initialState = {
    id: 0,
    email: null,
    login: null,
    isAuth: null,
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

export default AuthReducer;
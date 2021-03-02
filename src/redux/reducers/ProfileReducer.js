import {ADD_NEW_POST, FETCHING_STATUS, FETCHING_USERS_AVATARKA, FETCHING_USERS_PROFILE} from "../actions/ActionTypes";
import {profileAPI, usersAPI} from "../../components/API";

const initialState = {
    post:[],
    currentUsersProfile: null,
    usersProfileAva: null,
    status:'',
}

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_POST:
            return{
                ...state,
                post: [...state.post, action.payload]
        }
        case FETCHING_USERS_PROFILE:
            return{
                ...state,
                currentUsersProfile: action.payload
            }
        case FETCHING_USERS_AVATARKA:
            return{
                ...state,
                usersProfileAva: action.payload
            }
        case FETCHING_STATUS:
            return {
                ...state,
                status: action.payload
            }

        default:
            return {
                ...state
            }

    }
}

export const fetchCurrentUsersProfile = (id)=>({type: FETCHING_USERS_PROFILE, payload:id})
export const fetchUsersProfileAva = (img) =>({type: FETCHING_USERS_AVATARKA, payload:img})
export const fetchUserStatus = (status) =>({type: FETCHING_STATUS, payload:status})
export const addPost = (formData)=> ({type: ADD_NEW_POST, payload:formData})



export const getUserProfile = (currentUsersProfile)=>{
    return (dispatch)=>{
        usersAPI.getUserProfile(currentUsersProfile).then(data =>{
            dispatch(fetchUsersProfileAva(data.photos.small))
        })
    }
}
export const getUserStatus = (userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId).then(response =>{
                dispatch(fetchUserStatus(response.data))

        })
    }
}

export const updateStatus = (userStatus)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(userStatus).then(response =>{
            if(response.data.resultCode === 0){
                dispatch(fetchUserStatus(userStatus))
            }
        })
    }
}

export default profileReducer;
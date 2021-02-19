import {ADD_NEW_POST, FETCHING_USERS_AVATARKA, FETCHING_USERS_PROFILE} from "../actions/ActionTypes";

const initialState = {
    post:[],
    currentUsersProfile: null,
    usersProfileAva: null
}

const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_POST:
            debugger;
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

        default:
            return {
                ...state
            }

    }
}

export const fetchCurrentUsersProfile = (id)=>({type: FETCHING_USERS_PROFILE, payload:id})
export const fetchUsersProfileAva = (img) =>({type: FETCHING_USERS_AVATARKA, payload:img})

export default profileReducer;
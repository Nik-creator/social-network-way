import {
    ADD_NEW_MESSAGE,

} from "../actions/ActionTypes";
import {profileAPI, usersAPI} from "../../components/API";

const initialState = {
    message:[],
}

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return{
                ...state,
                message: [...state.message, action.payload]
        }
        default:
            return {
                ...state
            }

    }
}
export const fetchingMessage = (message) => ({type: ADD_NEW_MESSAGE, payload: message})


export default dialogsReducer;
import {
    FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT_USERS,
    FETCHING_USERS, TOGGLE_BUTTON,
} from "../actions/ActionTypes";
import {usersAPI} from "../../components/API";

const initialState ={
    users:[],
    totalCount: 0,
    pageSize: 8,
    currentPages:1,
    isFetching: true,
    isFollowing: [],
}


const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.payload){
                        return{...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.payload){
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state,
                users:action.payload
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                 currentPages: action.payload
            }
        case SET_TOTAL_COUNT_USERS:
            return{
               ...state,
                totalCount: action.payload
        }
        case FETCHING_USERS:
            return{
                ...state,
                isFetching: action.payload
            }
        case TOGGLE_BUTTON:
            return{
                ...state,
                isFollowing: action.isFetching ?
                    [...state.isFollowing, action.userId] :
                    state.isFollowing.filter(id => id !== action.userId)

            }
        default:
            return{
                ...state
            }

    }
}

export const acceptFollowAction = (userId)=> ( {type: FOLLOW, payload:userId} )
export const acceptUnfollowAction = (userId)=> ( {type: UNFOLLOW, payload:userId} )
export const setUsers = (date) => ( {type: SET_USERS, payload:date} )
export const setCurrentUsers = (page) => ( {type: SET_CURRENT_PAGE, payload:page} )
export const setTotalCounter = (countUsers) =>({type: SET_TOTAL_COUNT_USERS, payload:countUsers})
export const fetchingUsers = (data) => ({type: FETCHING_USERS, payload:data})
export const toggleButton = (isFetching, userId)=>({type: TOGGLE_BUTTON, isFetching, userId})


export const getUsers = (currentPages, PageSize )=>{
    return (dispatch)=>{
        dispatch(fetchingUsers(true));
        usersAPI.getUsers(currentPages, PageSize).then(data => {
            dispatch(fetchingUsers(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCounter(data.totalCount));
        })
    }
}
export const getUnfollow = (id)=>{
    return (dispatch)=>{
        dispatch(toggleButton(true, id))
        usersAPI.unfollow(id).then(data =>{
            dispatch(toggleButton(false, id))
            if(data.resultCode === 0){
                dispatch(acceptUnfollowAction(id))
            }
        })
    }
}
export const getFollow = (id) =>{
    return (dispatch)=>{
        dispatch(toggleButton(true, id))
        usersAPI.follow(id).then(data =>{
            dispatch(toggleButton(false, id))
            if(data.resultCode === 0){
                dispatch(acceptFollowAction(id))
            }
        })
    }
}


export default userReducer;
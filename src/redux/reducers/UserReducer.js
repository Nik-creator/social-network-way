import {
    FOLLOW,
    UNFOLLOW,
    SET_USERS,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT_USERS,
    FETCHING_USERS
} from "../actions/ActionTypes";

const initialState ={
    users:[],
    totalCount: 0,
    pageSize: 8,
    currentPages:1,
    isFetching: true,
}


const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
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
            debugger;
            return{
                ...state,
                isFetching: action.payload
            }
        default:
            return{
                ...state
            }

    }
}

export const followAction = (userId)=> ( {type: FOLLOW, payload:userId} )
export const unfollowAction = (userId)=> ( {type: UNFOLLOW, payload:userId} )
export const setUsers = (date) => ( {type: SET_USERS, payload:date} )
export const setCurrentUsers = (page) => ( {type: SET_CURRENT_PAGE, payload:page} )
export const setTotalCounter = (countUsers) =>({type: SET_TOTAL_COUNT_USERS, payload:countUsers})
export const fetchingUsers = (data) => ({type: FETCHING_USERS, payload:data})




export default userReducer;
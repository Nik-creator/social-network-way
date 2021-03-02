import { INITIALIZED_SUCCESS, SET_USERS_DATA} from "../actions/ActionTypes";
import {getAuthMe} from "./authReducer";


let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action )=>{
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }

        default:
            return{
                ...state
            }
    }
}

export const initializedSuccess = ()=>({type:INITIALIZED_SUCCESS})

export const initializeApp = ()=>{
    return(dispatch)=>{
       let resultPromise = dispatch(getAuthMe());
       // let somePromise = dispatch(some())
       // let somePromise = dispatch(some())
       // let somePromise = dispatch(some())


       Promise.all([resultPromise]).then(()=>{
            dispatch(initializedSuccess())
        })
        // dispatch(initializedSuccess())
    }
}



export default AppReducer;
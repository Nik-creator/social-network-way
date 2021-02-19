import {combineReducers} from "redux";
import profileReducer from "./ProfileReducer";
import userReducer from "./UserReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    users: userReducer,
    auth: AuthReducer
})

export default rootReducer;
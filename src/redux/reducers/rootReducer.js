import {combineReducers} from "redux";
import profileReducer from "./ProfileReducer";
import userReducer from "./UserReducer";
import AuthReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import dialogsReducer from "./DialogsReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    users: userReducer,
    auth: AuthReducer,
    dialogs: dialogsReducer,
    form: formReducer

})

export default rootReducer;
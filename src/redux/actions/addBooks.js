import {ADD_NEW_POST} from "./ActionTypes";

export const addPost = (post) => {
    return {
        type: ADD_NEW_POST,
        payload: post
    }
}

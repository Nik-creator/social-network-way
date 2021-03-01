import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

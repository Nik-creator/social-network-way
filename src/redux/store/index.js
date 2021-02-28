import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = Store

export default Store;

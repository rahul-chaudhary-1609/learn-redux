
import { combineReducers } from "redux";
import authReducer from "./auth";
import counterReducer from "./counter";


const allReducer = combineReducers({
    counter: counterReducer,
    auth:authReducer,
})

export default allReducer;
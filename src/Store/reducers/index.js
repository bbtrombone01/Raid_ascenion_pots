import { combineReducers } from "redux";
import desiredResouceReducer  from "./desiredResouceReducer"
import potionCountReducer from "./potionCountReducer";

const rootReducer = combineReducers({desiredResouceReducer, potionCountReducer})


export default rootReducer
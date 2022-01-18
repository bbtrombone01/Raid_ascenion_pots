import { combineReducers } from "redux";
import desiredResouceReducer  from "./desiredResouceReducer"
import potionCountReducer from "./potionCountReducer";
import errorHandlingReducer from "./errorHandlingReducer";

const rootReducer = combineReducers({desiredResouceReducer, potionCountReducer,errorHandlingReducer})


export default rootReducer
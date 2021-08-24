import { combineReducers } from "redux";
import desiredResouceReducer  from "./desiredResouceReducer"
import potionCountReducer from "./potionCountReducer";
import energyReducer from "./energyReducer";
import errorHandlingReducer from "./errorHandlingReducer";

const rootReducer = combineReducers({desiredResouceReducer, potionCountReducer, energyReducer,errorHandlingReducer})


export default rootReducer
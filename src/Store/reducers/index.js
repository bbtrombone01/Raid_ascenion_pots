import { combineReducers } from "redux";
import desiredResouceReducer  from "./desiredResouceReducer"
import potionCountReducer from "./potionCountReducer";
import energyReducer from "./energyReducer";

const rootReducer = combineReducers({desiredResouceReducer, potionCountReducer, energyReducer})


export default rootReducer
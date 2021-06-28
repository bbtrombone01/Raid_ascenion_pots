import { combineReducers } from "redux";
import  homePageReducer  from "./homePageReducer"
import potionCounteReducer from "./potionCountReducer";

const rootReducer = combineReducers({homePageReducer, potionCounteReducer})


export default rootReducer
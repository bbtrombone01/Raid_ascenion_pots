import { combineReducers } from "redux";
import  homePageReducer  from "./homePageReducer"
import potionCounteReducer from "./potionCountReducer";
import formReducer from "./FormReducer";

const rootReducer = combineReducers({homePageReducer, potionCounteReducer,formReducer})


export default rootReducer
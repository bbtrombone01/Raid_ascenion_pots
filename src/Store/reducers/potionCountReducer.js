const initialState = {
    "Lesser Arcane": 0,
    "Greater Arcane": 0,
    "Superior Arcane": 0,
    "Lesser Magic": 0,
    "Superior Magic": 0,
    "Greater Magic": 0,
    "Lesser Void": 0,
    "Superior Void": 0,
    "Greater Void": 0,
    "Lesser Force": 0,
    "Superior Force": 0,
    "Greater Force": 0,
    "Lesser Spirit": 0,
    "Superior Spirit": 0,
    "Greater Spirit": 0,
}

const potionCountReducer =( state = initialState, action)=>{
    switch(action.type){

        case "INCREMENTPOTION":
            // debugger
            return {
                ...state,
               [action.key1]: state[action.key1] + action.value1 * action.quanity,
               [action.key2]: state[action.key2] + action.value2 * action.quanity,   
            }

        case "BlankSTATE": {
           
            return {
            ...initialState
            }
        }

        default: 
            return state
    }

}


export default potionCountReducer
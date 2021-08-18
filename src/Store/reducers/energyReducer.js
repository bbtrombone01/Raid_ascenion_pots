const intialState = {
    energy: 0
}


const energyReducer =( state = intialState, action)=>{

    switch(action.type){

        case "INCREASEENERGY": {

            // debugger 

            return {
                ...state,
                energy: state.energy + action.payload
            }
        }

        case "INTIALSTATE": {
            return {
                ...intialState
            }
        }

        default: 
            return state 
    }

}

export default energyReducer
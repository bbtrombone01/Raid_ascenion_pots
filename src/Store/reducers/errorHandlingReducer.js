const intialState =  {
    arrayOfAscnsionErrors: [ ]
} 


const errorHandlingReducer = (state =intialState, action) =>{

    switch(action.type){

        case "ADDTOARRAY":
            
        return  {
            ...state,
            arrayOfAscnsionErrors: state.arrayOfAscnsionErrors.concat(action.int)
        }

        case "DEFAULTSTATE":

            return {
                ...intialState
            }

        default: 
            return state
    }
}


export default errorHandlingReducer
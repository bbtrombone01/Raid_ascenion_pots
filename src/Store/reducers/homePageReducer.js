const initialState = {
    count: 0
}

const homePageReducer =(state = initialState, action)=>{

    switch(action.type){
        case "INCERMENTCOUNT":
            return {
                state
            }
    

    default: 
        return state

    }

}

export default homePageReducer
const initialState = {
    count: 1
}

const homePageReducer =(state = initialState, action)=>{

    switch(action.type){
        case "INCERMENTCOUNT":
            debugger
            return {
                ...state,
            }
    

    default: 
        return state

    }

}

export default homePageReducer
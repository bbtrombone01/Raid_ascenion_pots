const initialState = {
    count: [0]
}

const homePageReducer =(state = initialState, action)=>{

    switch(action.type){


        case "INCERMENTCOUNT":
            // debugger
            return {
                count: state.count.concat(state.count.length)
            }
    

    default: 
        return state

    }

}

export default homePageReducer
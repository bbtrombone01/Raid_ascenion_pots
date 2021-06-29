const initialState = {
    count: 1
}

const homePageReducer =(state = initialState, action)=>{

    switch(action.type){


        case "INCERMENTCOUNT":
            return {
             count: state.count + 1
            }
    

    default: 
        return state

    }

}

export default homePageReducer
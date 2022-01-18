const initialState = {
    desiredFormData: [{
        "Rareity": "choose", 
        "Affinity": "choose", 
        startAscension: 0, 
        endAscension: 1, 
        id: 1, 
        quanity: 0
    }]
}

const desiredResouceReducer =(state = initialState, action)=>{

    switch(action.type){
        case "ADDOBJECT":
            return {
                desiredFormData: state.desiredFormData.concat(action.payload)
            }
    
        case "EDIT":

            return {
                ...state,
                 desiredFormData: state.desiredFormData.map( (e) =>{
                    if(e.id === action.payload.id){

                        e[action.payload.key] = action.payload.value
                        return e
                    }
                    return e
                })
            
            }
        
        case "DELETE":
            return{
                ...state,
                desiredFormData: action.payload
            }
        case "UPDATE":

            return {
                ...state,
                desiredFormData: state.desiredFormData.map((e) =>{ 
                    if( e.id === action.payload.id){
                        e[action.payload.field] = parseInt(action.payload.value)

                        return e
                    }
                        return e
                })
            }
        

    default: 
        return state

    }

}

export default desiredResouceReducer
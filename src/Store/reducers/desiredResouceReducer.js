const initialState = {
    desiredFormData: [{
        "Rareity": null, 
        "Affinity": null, 
        startAscension: null, 
        endAscension: null, 
        id: 0, 
        quanity: 1
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
                    if(e.id == parseInt(action.payload.index)){
                        e[action.payload.key] = action.payload.value
                        return e
                    }
                    return e
                })
            
            }
        
        case "CHANGEQUANITY":
                // debugger 
            return{
                ...state,
                desiredFormData: state.desiredFormData.map( (e) =>{
                    if(e.id == action.objectId){
                        e.quanity = parseInt(action.newQuainity)
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
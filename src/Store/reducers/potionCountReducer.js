const initialState = {
    "Arcane lesser potion": 0,
    "Arcane medium potion": 0,
    "Arcane greater potion": 0,
    "Force lesser potion": 0,
    "Force medium potion": 0,
    "Force greater potion": 0,
    "Magic lesser potion": 0,
    "Magic medium poiton": 0,
    "Magic greater potion": 0,
    "Spirit lesser potion": 0,
    "Spirit medium potion": 0,
    "Spirit greater potion": 0,
}

const potionCounteReducer =( state = initialState, action)=>{
    switch(action.type){
        case "INCREMENTPOTION": {
            return state
        }

        default: 
            return state
    }

}


export default potionCounteReducer
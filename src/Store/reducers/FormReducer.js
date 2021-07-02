const initialState = [
    {rareity: ["uncommon", "rare", "epic", "lego"]},
    {affinity: ["void", "force","magic","spirit"]},
    {startAscenion: [0,1,2,3,4,5,6]},
    {EndAscension:[0,1,2,3,4,5,6]}
]

const formReducer = (state =initialState, action)=>{
    switch(action.type){

        default: 
            return state
    }
}

export default formReducer
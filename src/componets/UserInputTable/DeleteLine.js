import {React} from "react"
import {useDispatch, useSelector} from "react-redux"

function DeleteLine (props){

    const desiredFormDataState = useSelector((state) => state.desiredResouceReducer.desiredFormData) 

    const dispatch = useDispatch()
 // maybe an x instead of the word delete

    
    function deleteLine(){

        let testFilter = desiredFormDataState.filter((e) => e !== desiredFormDataState[props.id-1])

        for(let i = 0 ;i < testFilter.length; i++){

            if(testFilter[i].id > props.id){

                testFilter[i].id = testFilter[i].id -1
            }

        }

        dispatch({
            type: "DELETE",
            payload:  testFilter
        })
    }

    
        return (<div className="StateData">
            <button onClick={deleteLine} >delete line</button>
        </div>)
    
}

export default DeleteLine
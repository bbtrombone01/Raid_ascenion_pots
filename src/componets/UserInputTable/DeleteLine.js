import {React} from "react"
import {useDispatch, useSelector} from "react-redux"

function DeleteLine (props){

    const desiredFormDataState = useSelector((state) => state.desiredResouceReducer.desiredFormData) 

    const dispatch = useDispatch()
 // maybe an x instead of the word delete

    
    function deleteLine(){

        let filteredData = desiredFormDataState.filter((e) => e !== desiredFormDataState[props.id-1])

        for(let i = 0 ;i < filteredData.length; i++){

            if(filteredData[i].id > props.id){

                filteredData[i].id = filteredData[i].id -1
            }

        }

        dispatch({
            type: "DELETE",
            payload:  filteredData
        })
    }

    
        return (<div className="StateData">
            <button onClick={deleteLine} >delete line</button>
        </div>)
    
}

export default DeleteLine
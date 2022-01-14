import React from "react"
import FormElement from "./FormElement"
import {useSelector, useDispatch} from "react-redux"
import DeleteLine from "../DeleteLine"

function DesiredResourceForm (){

    // need to figrue out word instead of form 
    // user input table ? 

    const desiredFormDataState = useSelector((state) => state.desiredResouceReducer.desiredFormData) 

    const dispatch =useDispatch()

  // creates a new object to add to the desiredFormData array.
  const addObjectToArray=()=>{

        dispatch({
            type: "ADDOBJECT",
            payload: {
                Rareity: null, 
                Affinity: null, 
                startAscension: 0, 
                endAscension: 1,
                id: desiredFormDataState.length + 1,
                quanity: 0
            }
        })
    }

        //maps over each object in the desiredFormData array from the desiredResouceReducer creates a form for the user input data,
            let mapOverArrayOfObjects = desiredFormDataState.map( e => <FormElement key ={e.id+"form"} formObjectId ={e}  />)
      
            return ( <div className="userInputParnetContainer">
                <table className ="userInputTable">
                    <tbody>
                        <tr className= "tableInfo"> 
                            <th className="tableHead"> Line</th>
                            <th className="tableHead">Rarity</th>
                            <th className ="tableHead">Affinity</th>
                            <th className ="tableHead">Start Ascension</th>
                            <th className ="tableHead"> End Ascension</th>
                            <th className= "tableHead"> Quanity</th>
                        </tr>
                        <tr className>
                            {mapOverArrayOfObjects}
                        </tr>
                    </tbody>
                </table>
                <button onClick={addObjectToArray} > add line </button>
                <DeleteLine />
            </div>) 
}

export default DesiredResourceForm
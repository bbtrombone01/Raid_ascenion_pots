import React from "react"
import FormElement from "./FormElement"
import {connect} from "react-redux"


class DesiredResourceForm extends React.Component{


  // creates a new object to add to the desiredFormData array.
 // each object in the desriedResourceReducer has the same id as it's index in the array 
 addObjectToArray=()=>{
       let payload = {
           Rareity: null, 
           Affinity: null, 
           startAscension: null, 
           endAscension: null,
           id: this.props.arrayOfObjects.length,
           quanity: 1
        }
        this.props.addObject(payload)
    }

    render(){
        
        //maps over each object in the desiredFormData array from the desiredResouceReducer creates a form for the user input data,
            let mapOverArrayOfObjects = this.props.arrayOfObjects.map( e => <FormElement key ={e.id+"form"} formObject ={e}  />)
            return <div>
                {/* <br/>
                <br/> */}
                <table className =" testTwo">
                    <tbody>
                        <tr className= "parent"> 
                            <th className="test"> Line</th>
                            <th className="test">Rarity</th>
                            <th className ="test">Affinity</th>
                            <th className ="test">Start Ascension</th>
                            <th className ="test"> End Ascension</th>
                            <th className= "testEA"> Quanity</th>
                        </tr>
                    <tr className = "grandparent">
                        {mapOverArrayOfObjects}
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.addObjectToArray}> add another champion </button>
            </div>
        }
}

const mapStateToProps = (state) =>{

    return{
        arrayOfObjects: state.desiredResouceReducer.desiredFormData
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        addObject: (payload) => dispatch({type: "ADDOBJECT", payload})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DesiredResourceForm) 
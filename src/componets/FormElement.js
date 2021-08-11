import React from "react"
import FormElementParmeters from "./FormElementParmeters"

class FormElement extends React.Component{


        // change css names at some point 
        
        render(){
                // generates an array from the keys in formObject  
              let  arrayOfKeys = Object.keys(this.props.formObject)

              // removes the string "id" from the array 
              arrayOfKeys.pop()

              let  formElements = arrayOfKeys.map( e => <FormElementParmeters formSection = {e} dropDownClassname={e+","+this.props.formObject.id} key= {e+this.props.formObject.id} objectId={this.props.formObject.id} />)
               
              // h5 tags are to line up elements on page, do not remove
               return <td className="parent" >
                       <div className="testThreeA"> <h5> </h5> {this.props.formObject.id +1}</div>
                       {formElements}
                       <div className="testThree ">
                                <h5> </h5>
                             <input className="testThree" type="number" min="1" />
                        </div> 
                </td>
        }
}

export default FormElement
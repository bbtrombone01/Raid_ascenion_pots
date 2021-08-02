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
               
               return <div className="parent" >
                       {formElements} 
                </div>
        }
}

export default FormElement
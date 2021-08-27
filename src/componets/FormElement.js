import React from "react"
import FormElementParmeters from "./FormElementParmeters"
import QuanityInput from "./QuanityInput"


class FormElement extends React.Component{
        
        render(){
              // generates an array from the keys in formObject  
              let  arrayOfKeys = Object.keys(this.props.formObject)

              // removes the string "id" and "qunaity" from the array 
              arrayOfKeys.pop()
              arrayOfKeys.pop()

              let  formElements = arrayOfKeys.map( e => <FormElementParmeters formSection = {e} dropDownClassname={e+","+this.props.formObject.id} key= {e+this.props.formObject.id} objectId={this.props.formObject.id} />)
               
               return <td className="parent" >
                       <div className="testThreeA"> {this.props.formObject.id +1}</div>
                       {formElements}
                       <QuanityInput objectId={this.props.formObject.id}/>
                </td>
        }
}

export default FormElement
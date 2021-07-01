import React from "react"
import  "../form.css"
import FormElement from "./FormElement";


class SingleLineForm extends React.Component{

        constructor(){

                super();

                this.state ={
                        boolean: false
                }
        }
// changes bolean to true 
        changeBoolean=()=>{
                this.setState({boolean: true})
        }

        render(){
                return <div className="parent" >
                       <FormElement title="rariety" showDropDownMenu= {false} />
                       {/* <FormElement title="affinity" showDropDownMenu= {false} />
                       <FormElement title= "starting ascension" showDropDownMenu= {false} />
                       <FormElement title= "ending ascension" showDropDownMenu= {false} /> */}
                </div>

        }
}


export default SingleLineForm
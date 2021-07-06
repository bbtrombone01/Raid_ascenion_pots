import React from "react"
import  "../form.css"
import FormElement from "./FormElement";
import {connect} from "react-redux"

class SingleLineForm extends React.Component{

        state = {
                rareity: null,
                affinity: null,
                startAssecion: null,
                endAssescion: null
        }

        fillInValue =(event)=>{
                event.preventDefault()
                let key = event.target.value.split(",")[0]
                let value = event.target.value.split(",")[1]
                this.setState({[key]: value})
                console.log(this.state)

        
            }

        

        render(){
                let formAreas = this.props.FormInfo.map( e => <FormElement value= {e} test1 = {this.fillInValue} />)


                return <div className="parent" >
                        {formAreas}
                </div>

        }
}

const mapStateToProps = (state) =>{
        return{
           FormInfo: state.formReducer
        }
    }

export default connect(mapStateToProps)( SingleLineForm)
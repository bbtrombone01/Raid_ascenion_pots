import React from "react"
import  "../form.css"
import FormElement from "./FormElement";
import {connect} from "react-redux"

class SingleLineForm extends React.Component{


        render(){
                let formAreas = this.props.FormInfo.map( e => <FormElement value= {e} />)


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
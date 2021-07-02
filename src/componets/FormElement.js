import React from "react"
import "../form.css"
// import {connect} from "react-redux"

class FormElement extends React.Component{

 
    render(){

        let test  = Object.keys(this.props.value)

        return <div className="card">
                        <div className="container">
                            <h5 className="header"> {test}</h5>
                            <button> choose</button>
                        </div>
            </div>

    }
}



export default FormElement
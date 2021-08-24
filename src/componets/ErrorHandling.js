import React from "react"
import {connect} from "react-redux"


class ErrorHandling extends React.Component {

    
    //creates a string of all the line errors 
    
    generateErrorString =()=>{
        let errorLines = ""

        for(let i = 0; i < this.props.userErrors.length; i++){

            if( i === this.props.userErrors.length - 1){
                errorLines = errorLines + " and " + this.props.userErrors[i]
            }else{
                errorLines = errorLines + this.props.userErrors[i] +  ", "
            }
        }
            return errorLines
    }

    render(){
            let message = null

            if(this.generateErrorString() !== ""){

                message = "error: line"+ this.generateErrorString()+" has a has a start ascension that is equal to or greater than end ascension"
            }
        return <p> {message} </p>
    }
    
}

const mapStateToProps =(state)=>{
    return {
        userErrors: state.errorHandlingReducer.arrayOfAscnsionErrors
    }
}

export default connect(mapStateToProps)(ErrorHandling)
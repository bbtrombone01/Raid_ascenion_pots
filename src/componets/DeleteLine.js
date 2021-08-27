import React from "react"
import {connect} from "react-redux"

class DeleteLine extends React.Component{

    state = {
        line: null 
    }

  

    handleFormSubmit =()=>{
        // creates a new array getting rid of a line based off user input
        let newFormData = this.props.desiredFormData.filter( (e) => e.id+1 !== this.state.line)

        // iterates throught the array updating every objects id to be one higher, keeps the lines in the right order 
        for (let i = 0; i < newFormData.length; i++){
            if(newFormData[i].id+1 > this.state.line){
                console.log(newFormData[i].id)
                newFormData[i].id = newFormData[i].id - 1
            }
            // replaces old state with the newFormData
            this.props.delete(newFormData)
        }
    }

    // changes the state to reflect current nummber  from input 
    handleStateChange = (event)=>{       
        this.setState({
            line: parseInt(event.target.value)
        })
    }

    
    
    render(){
        return <div className="test4a">
            <input onChange={(event) =>this.handleStateChange(event)} type="number" min="1" max={this.props.numberFieldRange} />
            <button onClick={ this.handleFormSubmit}> delete line </button>
        </div>
    }
}

const mapStateToProps =(state)=>{
    return {
        numberFieldRange: state.desiredResouceReducer.desiredFormData.length,
        desiredFormData: state.desiredResouceReducer.desiredFormData
    }
}

const mapActionsToProps =(dispatch)=>{
    return {
        delete: (payload) => dispatch({type: "DELETE",payload})
    }
}

export default connect(mapStateToProps,mapActionsToProps)(DeleteLine)
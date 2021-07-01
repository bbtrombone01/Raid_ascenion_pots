import React from "react"
import SingleLineForm from "./Form"
import {connect} from "react-redux"

class HomePage extends React.Component{

    
    // every time you this.props is updated the length of the array increases 
    componentDidUpdate(){
        let dumbArrayForIteration = []
        
        for(let i=0; i<this.props.count; i++){
            dumbArrayForIteration.push(i)
        }
        return dumbArrayForIteration
    }

    increaseCount=()=>{
        let newCountindex = this.props.count.length +1
        this.props.increment(newCountindex)
    }

        render(){
            // arry of numbers need for homePageForm
            
            let homePageArray = this.componentDidUpdate()

            // maps through the array, generates a SinfleLineForm for each index.
            
            const homePageForm = homePageArray.map(element =><SingleLineForm/>)
            return <div>
                {homePageForm}
                <br />
                <button onClick={this.increaseCount}> press me to increase count </button>
            </div>
        }

}

const mapStateToProps = (state) =>{
    return{
        count: state.homePageReducer.count
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        increment: (value) => dispatch({type: "INCERMENTCOUNT", payload: value})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage) 
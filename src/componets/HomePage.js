import React from "react"
import SingleLineForm from "./Form"
import {connect} from "react-redux"
// import {incrementCount} from "../Store/actions/hompageActions"

class HomePage extends React.Component{

    increaseCount=()=>{
       this.props.increment()

        // debugger
    }

        render(){
            return <div>
                <SingleLineForm/>
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
        increment: () => dispatch({type: "INCERMENTCOUNT"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage) 
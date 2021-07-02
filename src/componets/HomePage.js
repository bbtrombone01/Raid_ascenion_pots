import React from "react"
import SingleLineForm from "./Form"
import {connect} from "react-redux"

class HomePage extends React.Component{

    increaseCount=()=>{
        this.props.increment()
    }
        render(){
            //maps over each index in count, returns a singleLineForm for each index. 
            let mapOverCountIndexs = this.props.count.map( e => <SingleLineForm key={ String(e)+"Form"} />)

            return <div>
                {mapOverCountIndexs}
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
        increment: () => dispatch({type: "INCERMENTCOUNT"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage) 
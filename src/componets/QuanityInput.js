import React  from "react"
import {connect} from "react-redux"

class QuanityInput extends React.Component{


    test1 =(event )=>{
       console.log(this)
    //    debugger
       console.log(event.target.value)
       let newQuainity =  event.target.value
       this.props.edit( this.props.objectId ,newQuainity)
    }

    render(){

        return <div className="testThree ">
                <h5> </h5>
                <input onChange={(event) =>this.test1(event)} className="testThree" type="number" min="1" value={this.props.arrayOfObjects[this.props.objectId].quanity} />
            </div> 
    }

}

const mapDispatchToProps =(dispatch) =>{
    return {
        edit: (objectId, newQuainity) => dispatch({type: "CHANGEQUANITY", objectId, newQuainity})
    }
}

const mapStateToProps = (state) =>{
    // debugger
    return{
        arrayOfObjects: state.desiredResouceReducer.desiredFormData
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuanityInput)
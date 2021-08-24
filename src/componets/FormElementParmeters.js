import React from "react"
import "../form.css"
import DropDownMenu from "./DropDownMenu"
import {connect} from "react-redux"

class FormElementParmeters extends React.Component{

    // changes css rules 
    
    state = {
        showDropDownMenu: false,
    }
    
    changeDropDownMenuState =(event)=>{
        if(this.state.showDropDownMenu == true){
            this.setState({showDropDownMenu: false})
        }else{
            this.setState({showDropDownMenu: true})
        } 
        if(event.target.className){
            this.editFormObject(event)
        }
    }

    editFormObject(event){

        let payload = {
            value: event.target.innerText,
            key: this.props.formSection,
            index: this.props.objectId
        }
        
        this.props.edit(payload)
    }
    
    render(){


        let dropDownMenuInfo = {
            Affinity: ["Void", "Force", "Spirit", "Magic"],
            Rareity: ["Uncommon", "Rare", "Epic", "Legendary"],
            startAscension: [0,1,2,3,4,5],
            endAscension: [1,2,3,4,5,6],
        }

        let headerString = null
        // get an id based of the className prop

        let formElementId = parseInt(this.props.dropDownClassname.split(",")[1])
        
        // uses an id and the form section prop to get a string that can be filled in as the header vaule 
        headerString = this.props.arrayOfObjects[formElementId][this.props.formSection]
        
        // debugger
        
        let dropDownMenu =  dropDownMenuInfo[this.props.formSection].map( e=> <DropDownMenu buttonInnerText = {e} eventHandler={this.changeDropDownMenuState} key={e+this.props.objectId}/>)

        return <div className="testThree" >
                        <div>
                            <h5 className="header">  {headerString ? headerString :null}</h5>
                            <button onClick={ this.changeDropDownMenuState}> choose </button> 
                            {this.state.showDropDownMenu ? dropDownMenu : null}
                        </div>
            </div>

    }
}

const mapActionsToProps =(dispatch) =>{
    return {
        edit: (payload) => dispatch({type: "EDIT", payload})
    }
}

const mapStateToProps = (state) =>{
    return{
        arrayOfObjects: state.desiredResouceReducer.desiredFormData
    }
}


export default connect(mapStateToProps, mapActionsToProps)(FormElementParmeters)
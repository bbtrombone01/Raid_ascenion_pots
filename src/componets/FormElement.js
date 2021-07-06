import React from "react"
import "../form.css"
import DropDownLine from "./FormDropDown"

class FormElement extends React.Component{



    state = {
        shoewDropDownMenu: false,
        button: "choose", 
        
    }

    changeState =()=>{
        this.setState({shoewDropDownMenu: true})
    }

    render(){
        // debugger
       let buttonValue = this.state.button
       let shoewDropDownMenu = this.state.shoewDropDownMenu
       let test  = Object.keys(this.props.value)
       let dropDownMenu = this.props.value[test].map( e=> <DropDownLine name={test}  value={e} click={this.fillInValue} test2={this.props.test1}/>)
     

        return <div className={Object.keys(this.props.value)[0]}>
                        <div className="container">
                            <h5 className="header"> {test}</h5>
                            <button onClick={this.changeState}> {buttonValue}</button>
                            {/* {dropDownMenu} */}
                            {shoewDropDownMenu? dropDownMenu: null}
                        </div>
            </div>

    }
}



export default FormElement
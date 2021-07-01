import React from "react"
import "../form.css"
import DropDownMenu from "./DropDownMenu"


class FormElement extends React.Component{
    
    constructor(props){
        
        super(props)
        this.state ={
            title: props.title,
            dropDownMenu: props.showDropDownMenu,
            rariety: ["uncommon", "rare", "Epic", "Legendary"],
            affinity: ["Void", "Magic", "Spirit","Force"],
            indexes: [0,1,2,3,4,5,6]
        }
    }

    testChange =() =>{
        this.setState({dropDownMenu: true})
        // debugger
    }

    render(){


    return <div className="card">
                <div className="container">
                    <h5 className="header"> {this.state.title}</h5>
                    <button onClick={this.testChange}> choose</button>
                </div>
    </div>
    }

}


export default FormElement
import React from "react"


function DropDownMenu (props){

    return <div> 
        <button className="UserInputButton" onClick={props.eventHandler}>{props.buttonInnerText}</button>
    </div>
}

export default DropDownMenu 
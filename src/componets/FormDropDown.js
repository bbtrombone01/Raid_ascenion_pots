import React from "react"


function DropDownLine(props){

    // debugger
    return <div>

         <button value= {props.name[0] +","+ props.value} onClick={props.test2}> {props.value} </button>
    </div>
}

export default DropDownLine
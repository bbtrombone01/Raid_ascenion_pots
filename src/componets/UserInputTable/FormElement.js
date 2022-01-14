import React from "react"
import AffinityTableData from "./AffinityTableData"
import RarietyTableData from "./RarietyTableData"
import QuanityTableDataInput from "./QuanityTableDataInput"


function FormElement(props){

        // might call this something like user input table row

               return ( <div className="tableInfo" >
                       <td className="userInputTableRow"> {props.formObjectId.id} </td>
                       <RarietyTableData field = "Rareity" id={props.formObjectId.id} />
                       <AffinityTableData field = "Affinity" id={props.formObjectId.id} />
                       <QuanityTableDataInput min="0" max="5"  field = "startAscension" id={props.formObjectId.id} />
                       <QuanityTableDataInput min="1" max="6"  field = "endAscension" id={props.formObjectId.id} />
                       <QuanityTableDataInput min="0" max="50" field = "quanity" id={props.formObjectId.id} />
                </div>)
}

export default FormElement
import React from "react"
import {useSelector} from "react-redux"

function ErrorHandling(){

    const arrayOfIds = useSelector((state) => state["errorHandlingReducer"]["arrayOfAscnsionErrors"])

    
     const generateErrorMessage =(arrayOfIds)=>{

        let errorMessage = ""

        let stringOfErrors = ""

        if(arrayOfIds.length === 1){
            errorMessage= "Line " + arrayOfIds[0] + " has an error"
            return errorMessage
        }else if( arrayOfIds.length === 2){
            errorMessage = "Line " + arrayOfIds[0] + " and " + arrayOfIds[1] + " have errors"
        }else
            for(let i = 0; i < arrayOfIds.length; i++){
                if(i ===arrayOfIds.length-1){
                    return  errorMessage = "Line" + stringOfErrors + " and " +arrayOfIds[i] + " have errors"
                }
                    stringOfErrors = stringOfErrors + " " + arrayOfIds[i] + ","   
            } 
            if(stringOfErrors !== ""){
                errorMessage = "There are errors on line" + stringOfErrors + " have inaccuaries"
            }
            return errorMessage
    }

    return <div>
       {generateErrorMessage(arrayOfIds)} 
    </div>
    
}


export default ErrorHandling
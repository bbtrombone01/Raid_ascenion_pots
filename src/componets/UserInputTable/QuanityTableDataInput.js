import {React, useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux"


function QuanityTableDataInput(props){

    const  displayValue = useSelector((state) => state.desiredResouceReducer.desiredFormData[props.id-1])

    let [currentCount, setCount] = useState(props.min)

    const dispatch = useDispatch()

    const isInitialMount = useRef(true);
    
    const updateCurrentCount = (event)=>{
        
        setCount(event.target.value)
        
    }

    const dispatchCurrentCount =()=>{
        dispatch({
            type: "UPDATE",
            payload: {
                field: props.field,
                value: currentCount,
                id: props.id
            }
        })
    }
    
    // will only dispatch after the componet has mounted 
    useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {
          dispatchCurrentCount()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCount]);

    return(
        <input className="StateData"  onChange={updateCurrentCount} value={displayValue[props.field]} type="number"  min={props.min} max={props.max} />
    )
}


export default QuanityTableDataInput
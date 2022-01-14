import {React, useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux"


function QuanityTableDataInput(props){

    let [currentCount, setCount] = useState(props.min)

    const dispatch = useDispatch()

    const isInitialMount = useRef(true);
    
    const updateCurrentCount = (event)=>{
        
        setCount(event.target.value)
        
    }

    const dispatchCurrentCount =()=>{
        dispatch({
            type: "TESTQUALITY",
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
        <input className="StateData" onChange={updateCurrentCount} type="number" value={currentCount} min={props.min} max={props.max} />
    )
}


export default QuanityTableDataInput
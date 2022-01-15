import {React,useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux"


function AffinityTableData(props){

    let [ currentAffinity, setAffinity] = useState(null)


    const dispatch = useDispatch()

    const isInitialMount = useRef(true);

    const changeAffinity =(event )=>{


        setAffinity(event.target.value)
    }

    const dispatchAffinity =()=>{
        dispatch({
            type: "EDIT",
            payload: {
                id: props.id,
                key: props.field,
                value: currentAffinity
            }
        })
    }

    

    // will only dispatch after the componet has mounted 
    useEffect(() => {
        if (isInitialMount.current) {
           isInitialMount.current = false;
        } else {
            dispatchAffinity()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentAffinity]);



    //   debugger
    return(
        <select value={props.defaultSelect} onChange={changeAffinity} className="StateData">
            <option >{props.defaultSelect} </option>
            <option>Spirit</option>
            <option>Force</option>
            <option>Magic</option>
            <option>Void</option>
        </select>
    )
}

export default AffinityTableData
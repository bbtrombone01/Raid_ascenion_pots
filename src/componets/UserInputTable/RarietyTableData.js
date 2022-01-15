import {React, useState,useEffect,useRef} from "react";
import {useDispatch} from "react-redux"

function RarietyTableData(props){

    let [currentRariety, setRariety] = useState(null)

    const dispatch = useDispatch()

    const isInitialMount = useRef(true);

    const changeRarity =(event)=>{

        setRariety(event.target.value)
        
    }

    const dispatchRariety =() =>{

        dispatch({
            type: "EDIT",
            payload: {
                id: props.id,
                key: props.field,
                value: currentRariety
            }
        })

    }

     // will only dispatch after the compont has mounted 
    useEffect(() => {
        if (isInitialMount.current) {
           isInitialMount.current = false;
        } else {
            dispatchRariety()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentRariety]);


    return(
        <select value={props.defaultSelect} onChange={changeRarity} className="StateData">
            <option>choose </option>
            <option>Uncommon</option>
            <option>Rare</option>
            <option>Epic</option>
            <option>Legendary</option>
        </select>
    )
}

export default RarietyTableData
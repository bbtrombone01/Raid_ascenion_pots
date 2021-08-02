import React from "react"
import DesiredResourceForm from "./componets/DesiredResourceForm"
import PotionReducerSorter from "./componets/PotionReducerSorter"
import PoitonMap from "./componets/PoitonMap"
import "./form.css"

function App(){

  return <div className="parent">
    <DesiredResourceForm/>
    <PotionReducerSorter />
    <PoitonMap />

  </div> 
  
}

export default App
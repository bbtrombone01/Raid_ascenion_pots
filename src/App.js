import React from "react"
import DesiredResourceForm from "./componets/DesiredResourceForm"
import PotionReducerSorter from "./componets/PotionReducerSorter"
import PoitonMap from "./componets/PoitonMap"
import ParagrahBlurb from "./componets/ParagraphBlurb"
import "./form.css"

function App(){

  return <div className="testFour">
    <ParagrahBlurb />
    <DesiredResourceForm/>
    <PotionReducerSorter />
    <PoitonMap />

  </div> 
  
}

export default App
import React from "react"
import DesiredResourceForm from "./componets/DesiredResourceForm"
import PotionReducerSorter from "./componets/PotionReducerSorter"
import PoitonMap from "./componets/PoitonMap"
import ParagrahBlurb from "./componets/ParagraphBlurb"
import "./form.css"

function App(){

  return <div>
    <ParagrahBlurb />
    <div className="testFour">
      
    <DesiredResourceForm/>
    <PoitonMap />
    </div>
    <PotionReducerSorter />
  </div> 
  
}

export default App
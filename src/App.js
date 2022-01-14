import React from "react"
import DesiredResourceForm from "./componets/UserInputTable/DesiredResourceForm"
import PotionReducerSorter from "./componets/PotionReducerSorter"
import ParagrahBlurb from "./componets/ParagraphBlurb"
import "./form.css"

function App(){

  return <div>
    <ParagrahBlurb />
    <div className="testFour">
    <DesiredResourceForm/>
    <PotionReducerSorter />
    </div>
  </div> 
  
}

export default App
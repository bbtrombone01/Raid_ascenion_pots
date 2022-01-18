import React from "react"
import DesiredResourceForm from "./componets/UserInputTable/DesiredResourceForm"
import PotionReducerSorter from "./componets/PotionDisplayTable/PotionReducerSorter"
import ParagrahBlurb from "./componets/ParagraphBlurb"
import "./form.css"

function App(){

  return <div>
    <ParagrahBlurb />
    <div className="flexbox">
    <DesiredResourceForm/>
    <PotionReducerSorter />
    </div>
  </div> 
  
}

export default App
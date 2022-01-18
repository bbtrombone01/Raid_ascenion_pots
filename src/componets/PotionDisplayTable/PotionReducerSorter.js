import React from "react"
import {connect} from "react-redux"
import {poitons} from "../../pots_value"
import  TestPoitonTable from "./DisplayPotionTable"

class PotionReducerSorter extends React.Component{

    
    iterateOverDesiredFormData=()=>{

        // sets store to 0 of everything, if you just add without emptying the store, it generates to many potions
        this.props.blank()
        this.props.default()

        for(let i = 0; i < this.props.desiredFormData.length; i++){
            this.checkObject(this.props.desiredFormData[i])

        }
    }
    
    checkObject =(object)=>{

        if(Object.values(object).includes('choose')  !== true && object["startAscension"] <  object["endAscension"] && object["quanity"] !== 0 ){
            return this.addToStore(object)
        }else if (Object.values(object).includes('choose') !== true && object["startAscension"] >= object["endAscension"]){
            // adds the line number of the object to an array of all objects with starting ascesnion >= ending ascension 
            this.props.error(String([object.id]))
        }
    }

    addToStore =(object)=>{


        let potionsObject = poitons

        let startLevel = object["startAscension"]
        
        startLevel = parseInt(startLevel) +1

        for(let i = startLevel; i <= object["endAscension"]; i++){
            
            let poitonRareityAndLevel = object["Rareity"]+i

            /// creates two key value paris, to be feed into the potions store, ex. key1 = "Grater Arcane" value1= 0

            let key1 = Object.keys(potionsObject[poitonRareityAndLevel]["Arcane"])[0]
            
            let value1 = Object.values(potionsObject[poitonRareityAndLevel]["Arcane"])[0]
            
            let key2 = Object.keys(potionsObject[poitonRareityAndLevel][object["Affinity"]])[0]
            
            let value2 = Object.values(potionsObject[poitonRareityAndLevel][object["Affinity"]])[0]
            
            this.props.add(key1,value1,key2,value2, object.quanity)
        }

        
    }

  render(){
      this.iterateOverDesiredFormData()
      return (
          <TestPoitonTable />
      )
  }

}

const mapDispatchToProps =(dispatch) =>{
    return {
        blank: () => dispatch({type: "BLANKSTATE"}),
        default: ()=> dispatch({type: "DEFAULTSTATE"}),
        add: (key1,value1, key2,value2, quanity) => dispatch({type: "INCREMENTPOTION",key1,value1,key2,value2, quanity}),
        error: (int) => dispatch({type: "ADDTOARRAY",int}),
    }
}

const mapStateToProps = (state) =>{
    return{
        desiredFormData: state.desiredResouceReducer.desiredFormData
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PotionReducerSorter)
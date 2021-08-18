
import React from "react"
import { connect } from "react-redux"
import PotionDisplay from "./PotionDisplay"
import ConvertPotion from "./ConvertPotionsToEnergy"


class PoitonMap extends React.Component{

    render(){
        /// figure out a better key 
        let arrayOfPoitions = Object.keys(this.props.potionState)
         
        arrayOfPoitions = arrayOfPoitions.map( e => <PotionDisplay key={e} potion ={e} />)

        return <div class ="floatRightTest">
            {arrayOfPoitions}
            <ConvertPotion />
        </div>
    }
}

const mapStateToProps = (state) =>{

    return {
        potionState: state.potionCountReducer
    }
}

export default connect(mapStateToProps)(PoitonMap)


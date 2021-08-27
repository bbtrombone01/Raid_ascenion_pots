
import React from "react"
import { connect } from "react-redux"
import PotionDisplay from "./PotionDisplay"
import ConvertPotion from "./ConvertPotionsToEnergy"
import ErrorHandling from "./ErrorHandling"

class PoitonMap extends React.Component{

    render(){
        let arrayOfPoitions = Object.keys(this.props.potionState)
         
        arrayOfPoitions = arrayOfPoitions.map( e => <PotionDisplay key={e} potion ={e} />)

        return <div className ="floatRightTest">
            <ErrorHandling />
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


import React from "react"
import {connect} from "react-redux"


class ShowEnergy extends React.Component{


    render(){
        return <p> on average you will spend {this.props.overAllEnergyCost} engery to accuire these potions </p>
    }
}

const mapStateToProps =(state) => {

    return {
        overAllEnergyCost: state.energyReducer.energy
    }
}


export default connect(mapStateToProps)(ShowEnergy)
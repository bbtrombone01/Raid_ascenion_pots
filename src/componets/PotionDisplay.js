import React from "react"
import {connect} from "react-redux"


class PotionDisplay extends React.Component{

    render(){
 

        let potionString = null
        // checks each part of the potionCountReducer store and see if value not zero 
                if( this.props.potionCountReducer[this.props.potion] != 0){
                    // potionString is an int from the potiionCountReducer 

                    potionString = this.props.potionCountReducer[this.props.potion]

                    // converts the the int to a string and add the type of potion based of props
                    potionString = String(potionString) + this.props.potion
                    }

                    // only wants to display the string if you have some potions
        return < div>  {potionString ? potionString : null }    </div>
    }
}

const mapStateToProps = (state) =>{
    return {
        potionCountReducer: state.potionCountReducer
    }
}

export default connect(mapStateToProps)(PotionDisplay)
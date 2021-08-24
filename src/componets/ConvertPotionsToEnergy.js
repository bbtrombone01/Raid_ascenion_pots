import React from "react"
import {connect} from "react-redux"
import ShowEnergy from "./ShowEnergy"

class ConvertPotion extends React.Component{


    spliceState =()=>{


        // this sets energy to zero, this keeps the state from only growing
        this.props.setToZero()

        let holderEnergy = 0

        // breaks down this.props.potionState into an array 

        let arrayOfKeys =  Object.keys(this.props.potionState)

        
        for(let i = 0; i < arrayOfKeys.length; i+= 3){

            // arrayOfPotionsType ex should be ["Lesser Arcane", Greater Arcance", "Superior Arcane"]
            let arrayOfPotionsType = arrayOfKeys.slice(i, i + 3)


           holderEnergy = holderEnergy + this.createArrayOfNumbers(arrayOfPotionsType)
        } 

        this.props.increament( holderEnergy)
    }


    createArrayOfNumbers=( array) =>{
        let numbersArray = []
        
        for(let i = 0 ; i < array.length; i ++){
            
            // uses each index in the array to  refernce potionState and get a number for how many potions are needed
            numbersArray.push(this.props.potionState[array[i]])
            
        }
        
       return  this.checkForSmallPotions(numbersArray)
    }


    checkForSmallPotions =(array)=>{

        // index zero should be the Lesser potion, these need to be taken care of first. This is the only way to get these potions 
        if(array[0] > 0){
            
            this.level19Potions(array)

        }

        return this.level20Dugeons(array)


    }


    level19Potions =(array) =>{

        // these are average rates you get for doing a single run on this level. 

        let lesserPotions = 2.70
        let greaterPotions = 1.09
        let superiorPotions = 0.42

        // this is how much energy it cost to do a run on this level
        let energyCost = 14 

        
        let smallPoitongoal = array[0]
        
        let currentSmallPoitions = 0

        // i is going to be be used to keep track of runs, 
        let i = 0


        for( i ; currentSmallPoitions < smallPoitongoal; i++){

            currentSmallPoitions = currentSmallPoitions + lesserPotions
        }

        // index zero should be an amount of energy, it is no longer the potion count 
        array[0] = i * energyCost
        // index 1 should be medium potions 
        array[1] = array[1] - i * greaterPotions
        // index 2 should be bigPotions
        array[2] = array[2] - i * superiorPotions

    }


    level20Dugeons =(array)=>{

        // this is how much energy it cost to do a run on this level
        let energyCost = 16

         // i is going to be be used to keep track of runs, 
        let i = 0

        // these are average rates you get for doing a single run on this level. 
        let greaterPotions = 1.84
        let superiorPotions = 1

        // sees if index 1 or two is greater,
        // you will always run out of the greater value last so don't have to worry about account for left over potions 
        // index 1 should be Greater Potions
        // index 2 should be Superior Potions 

        if( array[1] > array[2]){

            for(i; array[1] > 0 ;i++){

                array[2] = array[2] - superiorPotions
                array[1] = array[1] - greaterPotions
            }

        }else {

            for(i; array[2] > 0 ; i++){
    
                 array[2] = array[2] - superiorPotions
                 array[1] = array[1] - greaterPotions
    
            } 

        }


        // index zero should be an amount of energy, it is no longer the potion count 
        let overallEnergy = array[0] + i * energyCost


        return overallEnergy
        
    }

    render(){

        this.spliceState()

        return <div>
                <ShowEnergy />
            </div> 
    }
}

const mapStateToProps =(state)=>{

        return  {
            potionState: state.potionCountReducer,
        }
}

const mapDispatchToProps = (dispatch)=>{
    
        return {
            increament: (payload) => dispatch({type: "INCREASEENERGY", payload}),
            setToZero: () => dispatch({type: "INTIALSTATE"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ConvertPotion)
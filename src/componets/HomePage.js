import React from "react"
import ParentForm from "./ParentForm"

class HomePage extends React.Component{

    state ={
        count: [0]
    }

        // increases length of the count array, creates number equal to array index 
    increaseCount =()=>{
        this.setState({count: this.state.count.concat(this.state.count.length)})
    }


        render(){

            let arrayOfIndexKeys = this.state.count.map(n => <ParentForm />)

            return <div>
                {arrayOfIndexKeys}
                <br />
                <button onClick={this.increaseCount}> press me to increase count </button>
            </div>
        }

}


export default HomePage
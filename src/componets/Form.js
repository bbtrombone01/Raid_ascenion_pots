import React from "react"
import  "../form.css"


class SingleLineForm extends React.Component{

        constructor(){

                super();

                this.state ={
                        boolean: false
                }
        }
// changes bolean to true 
        changeBoolean=()=>{
                this.setState({boolean: true})
        }

        render(){
                return <div>

                        <div className="card" >
                                <div className="container">  


                                <h4 className ="header"> rarity </h4>
                                <button onClick={this.changeBoolean}> choose </button>

                                </div>
                        </div>
                        <div>
                                <p> g</p>
                        </div>





















                        <button> affinity</button>
                        <button> start level</button>
                        <button> end level</button>
                        <button> submit</button>
                </div>
        }
}


export default SingleLineForm
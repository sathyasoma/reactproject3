
import React, { Component } from 'react'

class StateEx extends Component{

    constructor(props){
        super(props);
        this.state={

            name:"devasena",
            age:45,
            location:"kunthala"
        }
    }
    
    updateName(){

        this.setState(
            {
                name:"bahubali",
                age:56,
                location:"mahishmathi"
               
            }
        )
    }  
    render(){
        return(
            <div>
            <h2> name list</h2>
            <h3>Name is {this.state.name} Age is: {this.state.age} from {this.state.location}</h3>
            <button onClick={()=>this.updateName()}>click me</button>
            </div>
        )
    }

}

export default StateEx;
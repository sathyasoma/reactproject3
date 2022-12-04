
import React, { Component } from "react";

class UserEx extends Component{

    constructor(props){
        super(props);

        this.state={
            name:""
        }
    }

    changeText(event){

        this.setState({
            name:event.target.value
        })
    }

    render(){

        return(

            <div>
            
            <h2>From the End uset</h2>
            Enter Name Here:<input type="text" id="name" onChange={this.changeText.bind(this)} />
              <h2>End user Enterd Value:  {this.state.name}</h2>
            </div>
        )
    }


}
export default UserEx;
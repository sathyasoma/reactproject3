import React, { Component } from "react";

class DemoEx extends Component{
    constructor(props){
     super(props)
    this.state={
           moviename:"kantara"
}
    }
    updateName(){

this.setState({
    moviename:"avatar"
})
    }
    render(){

          return(
            <div>
            <h2>moviname is{this.state.moviename}</h2>
            <button onClick={()=>this.updateName()}>click me</button>

            </div>
          )

    }


}

export default DemoEx;


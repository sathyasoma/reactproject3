
import React, { Component } from 'react'

 class UpdateEx extends Component {
constructor(props){
    super(props);
    this.state={
        name:"sathya"
    }
console.log("constructor called")
}

static getDerivedStateFromProps() {
    return console.log("get derived state called");
  }

  shouldComponentUpdate() {
    return false;
  }
  componentDidUpdate() {
    document.getElementById("hel").innerHTML =
    "component Did Updated";
  }
  render() {
    return (
      <div>
      console.log("render called")
      <p id="hel"></p>
      

      </div>
      
    )
  }
}

export default UpdateEx;
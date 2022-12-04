
import React, { Component } from 'react'

 class WithoutRef extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }

    upadateName(e){
       
        this.setState({
            name:e.target.value
        })
    }
    
  render() {
    return (
      <div>
      <h2 style={{color:"green"}}>"Without Ref"</h2>
      Sathya Name is: <input type="text" onChange={this.upadateName.bind(this)}/>
      <br></br>
      <h2 style={{color:"red"}}>{this.state.name}</h2>
      </div>
    )
  }
}
export default WithoutRef;
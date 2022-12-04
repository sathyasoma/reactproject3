import React, { Component } from 'react'

 class WithRef extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color:""
        }
    }
    
    updateColor(e){

        this.setState({
           color: this.refs.anything.value
        })
    }

  render() {
    return (
      <div>
      
      <h2 style={{color:"brown"}}>By Using Refs</h2>

      Sathya Color is: <input type="text" ref="anything" onChange={this.updateColor.bind(this)}/>
    <br></br>
    <h2 style={{color:"blue"}}>{this.state.color}</h2>
      </div>
    )
  }
}
export default WithRef;
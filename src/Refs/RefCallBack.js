import React, { Component } from 'react'

 class RefCallBack extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employee:""
        }
    }
    
    updateEmp(e){
this.setState({
    employee:this.a.value
})
    }
  render() {
    return (
      <div>
      
      
      </div>
    )
  }
}
export default RefCallBack;
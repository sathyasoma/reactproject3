import React, { Component } from 'react';

class RefDomEx extends Component{

constructor(props) {
    super(props)

   this.callRef=React.createRef();
   this.addingRefInput= this.addingRefInput.bind(this);

}

addingRefInput(){

    this.callRef.current.focus();
}

render(){
    return(
        <div>
        <h2>hello world</h2>
        <input type="text" ref={this.callRef} />
        <input type="button" value="Enter Text" onClick={this.addingRefInput}/>
       
        </div>  
        
    )
}


}
export default RefDomEx;
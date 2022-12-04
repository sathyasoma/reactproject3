import React,{Component} from "react"
import Class2 from "./LifeExe";

export default class Class1 extends Component {
    constructor(props) {
      super(props)
        this.state = {
          name:"sathya"
      }
      console.log("Class1's Constructor")
    }
    static getDerivedStateFromProps(props,state){
      console.log("Class1 getDerivedStateFromProps")
      return null;
    }
    componentDidMount(){
       console.log("Class1 componentDidMount")
    }
 
    render() {
      console.log("Class1 Render method")
      console.log(this.state.name)
      return (
        <>
              <div>In Class 1</div>
              
            <Class2/>
        </>
       
        )
    }
  }


    
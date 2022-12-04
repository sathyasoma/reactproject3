import React, { Component } from "react";

class ClassDemo extends Component{


    render(){

        return(
            <div>
            <h2>i am class component</h2>
            <h3>movie name is{this.props.movie}</h3>
            </div>
        )
    }



}
export default ClassDemo;
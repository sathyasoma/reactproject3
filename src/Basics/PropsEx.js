
import React from "react";


function PropsEx(props){


    return(

        <>
           <h3>i am using props</h3>
           <h2>my name is {props.name} with {props.clgname} age is:{props.age} location is:{props.location}</h2>
        </>
    )



}

export default PropsEx;
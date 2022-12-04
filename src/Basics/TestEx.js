import React from "react";
import { useState } from "react";

const TestEx =()=>{

    const[color,setColor]=useState("green")

    return(
        <div>
        
        <h2>my color is {color}</h2>
        <button onClick={()=>setColor("red")}>click me</button>
        
        <button onClick={()=>setColor("blue")}>click me2</button>
        
        <button onClick={()=>setColor("yellow")}>click me3</button>

        </div>
    )

}
export default TestEx;
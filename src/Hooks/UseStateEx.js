import React from "react";
import { useState,useEffect } from "react";

const UseStateEx = () =>{

const [count, setCount] = useState(0);

return(

    <div>
        <h2>my count is {count}</h2>
        <button onClick={()=>setCount(count+4)}>click me</button>
    </div>
)



}
export default UseStateEx;
import React from "react";
import { useState,useEffect } from "react";

const UseEff = () =>{

const [count,setCount]=useState(0);


useEffect(() => {
document.title="count me effect"+count
})


const changehandle= () =>{

    setCount(count+5)
}

return(
    <div>
    <h2>My FAVORITE COLOR IS :{count}</h2>
    <button onClick={changehandle}>click see effect</button>
    </div>
)
}
export default UseEff;
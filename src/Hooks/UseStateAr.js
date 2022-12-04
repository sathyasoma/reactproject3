import React from "react";
import { useState } from "react";

const UseStateAr =() =>{

    const [emp,setEmp]=useState({
        name:"sathya",
        age:23,
        role:"trainer",
        address:"hyd"

    });

  const  updateEmp=()=>{

        setEmp({
            name:"prakash",
            age:67,
            role:"staff",
            address:"coimbotore"
        })
    }

    return(
        <div>
          <h2>Employee details:{emp.name} age is:{emp.age} Role: {emp.role} Address :{emp.address}</h2>
          <button onClick={updateEmp}>touch me</button>
        </div>
    )

}
export default UseStateAr;
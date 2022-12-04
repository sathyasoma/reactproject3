import React from "react";

const ListEx = () =>{

    const number=[1,2,3,4,5];

    const updatenumber=number.map((num)=>{return <li>{num}</li>;})

    return(
        <div>
           <ul>
              {updatenumber}
           </ul>
        </div>
    )

}
export default ListEx;
import React from "react";
import { useState } from "react";

const DemoObj =()=>{

    const [movie,setMovie]=  useState({

        moviename:"lovetoday",
        rating:9.3,
        tktprice:700
    })

  const  updateMovie=()=>{

      setMovie({
        moviename:"Avatar",
        rating:"10",
        tktprice:500,
  })
  }

return(

    <div>
    <h2>movie Details: {movie.moviename} Rating is: {movie.rating} Cost of tkt is: {movie.tktprice}</h2>
 <button onClick={updateMovie}>touch me</button>
    </div>
)

}
export default DemoObj;
import React from "react";

const Demo=()=>{

    return(
        <div>
          <h2>i am Demo child</h2>
          <Nav></Nav>
          <Header></Header>
          <Footer></Footer>


        </div>
    )


}

export default Demo;


const Nav=()=>{

    return <h3>i am Nav</h3>
}

const Footer=()=>{

    return <h2>i am Footer</h2>
}

const Header= () =>{

    return <h2>i am your Header</h2>
}
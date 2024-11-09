// import React from "react";
// const data ="Indore";
// import React from "react";
//  import App from "./cybrom";
// // import React from "react";
// import React from "./College";
// const salary =3450;

import Cybrom from "./cybrom";
const App=()=>{
  return(
    <>
      <Cybrom/>
    <h1 className="head">Application form</h1>
    Name: <input type="text"/>
    <br />
    City : <input type="text" />
    <hr size="4" color="red"/>
    <button>Save</button>
    </>
  )
}
export default App;
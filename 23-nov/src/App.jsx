// contects Api
import { useState } from "react";

import Comp5 from "./Comp5";
import { createContext } from "react";
const myContext=createContext();
const App=()=>{
    const [name,setName]=useState("Arun");
    return(
        <>
        <h1>Welcome:name:{name}</h1>
        
        <myContext.Provider value={{name}}>
        <Comp5/>
        </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};
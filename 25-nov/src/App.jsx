// 

import { createContext, useState } from "react";
import Cybrom from "./Cybrom";
const myContext=createContext();
const App=()=>{
    const [user,setUser]=useState("Tanu");
    return(
        <>
        
        <h1>welcome to my App myname:{user}</h1>
        <button onClick={()=> {setUser("Ayushi")}}>Click here</button>
        <myContext.Provider value={{user,setUser}}>
            <Cybrom/>
            </myContext.Provider>
        
        </>
    )
}
export default App;
export {myContext};

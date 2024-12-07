//Hooks use contects
import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
    const [name,setName]=useState("Arun");
    return(
        <>
        <h1>Welcome:name:{name}</h1>
        <Comp1 user={name}/>
        </>
    )
}
export default App;

import { useContext } from "react";
import { myContext } from "./App";
const Bhopal=()=>{
    const{user, setUser}=useContext(myContext);
    return(
        <>
        <h1>Welcoome to Bhopal:{user}</h1>
        <button onClick={()=>{setUser("aman")}}>Click here</button>
        
        </>
    )
}
export default Bhopal;
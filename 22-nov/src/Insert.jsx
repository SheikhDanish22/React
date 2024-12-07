import axios from "axios";
import { useState } from "react";
const Insert=()=>{
    const [input,setinput]=useState({});
const handle=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setinput(values=>({...values,[name]:value}))
}

const subhandle=()=>{
    let api="http://localhost:3000/Student";
    axios.post(api,input).then((res)=>{
        alert("Data save");
    })
}

    return(
        <>
        <h1>Insert Page</h1>
       Enter Roll no : <input type="text" name="RollNo"  onChange={handle}/> <br />
       Enter Name : <input type="text"name="Name" onChange={handle}/> <br />
       Enter city : <input type="text"name="City" onChange={handle}/> <br />
       Enter Fees : <input type="text"name="Fees" onChange={handle}/> <br />
     <button onClick={subhandle}>Submit</button>
        </>
    )
}
export default Insert;
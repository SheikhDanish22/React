import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{
    const [Mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/Student";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res);
        });
    }
    
    const ans=Mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.RollNo}</td>
            <td>{key.Name}</td>
            <td>{key.City}</td>
            <td>{key.Fees}</td>
        </tr>
        </>
    )
})
return(
    <>
    <h1>Live Api Data</h1>
    <button onClick={loadData}>click hera</button>
    <table border="black" bgcolor="pink" width="500px">
        <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
    </table>
    
    </>
)
}
export default App;
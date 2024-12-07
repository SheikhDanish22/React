import axios from "axios";
import { useState , useEffect } from "react";
const Display=()=>{
    const [mydata , setMydata]=useState([]);
    const loadData=()=>{
    let api="http://localhost:3000/Student";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    
}
useEffect(()=>{
    loadData();
}, [])
const ans=mydata.map((key)=>{
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
    <h1>Display data</h1>
    <table border="1">
        <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
    </table>
    
    
    </>
)

}



export default Display;
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { message } from "antd";
const Search=()=>{
    const [year, setYear]=useState("");
    const [mydata, setMyadta]= useState([]);
    const [errrMsg, setErrMsg]= useState("");
    const handleSubmit=()=>{
     let api=`http://localhost:3000/books/?publish_year=${year}`;
     axios.get(api).then((res)=>{
        setMyadta(res.data);
          if (res.data.length<=0)
          {
            setErrMsg(message.error("No books found for this year!"))
          }
          else 
          {
            setErrMsg("");
          }
     })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
             <tr>
                <td> {key.name} </td>
                <td> {key.price} </td>
                <td> {key.author_name} </td>
                <td> {key.publish_year} </td>
             </tr>            
            </>
        )
    });
    return(
        <>
         <h1> Search Books</h1>
         Enter Publish Year : <input type="text" name="year" 
         value={year} onChange={(e)=>{setYear(e.target.value)}} />
         <button onClick={handleSubmit}> Search</button>
         <hr />
         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>Book name</th>
          <th>Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
        </tr>
      </thead>
      <tbody>
      {errrMsg}
      {ans}
    </tbody>
    </Table>       
        </>
    )
}
export default Search;
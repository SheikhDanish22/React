import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update=()=>{
const [mydata, setMydata]=useState([]);
const navigate= useNavigate();

const loadData=()=>{
    let api="http://localhost:3000/books";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);
const myDel=(id)=>{
    let api=`http://localhost:3000/books/${id}`;
    axios.delete(api).then((res)=>{
        message.error("Record Sjuccesfully deleted!");
        loadData();
    })   
    
}


const myEdit=(id)=>{
    navigate(`/edit/${id}`);
}

const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
            <td> {key.name}</td>
            <td> {key.price}</td>
            <td> {key.author_name}</td>
            <td> {key.publish_year}</td>
            <td>

          <a href="#" onClick={()=>{myEdit(key.id)}}>
          <FaEdit />
          </a>
         


        </td>
        <td>
            <a href="#" onClick={()=>{myDel(key.id)}}>
            <MdDelete />
            </a>
            </td>
          </tr>
        </>
    )
})
    return(
        <>
         <h1> Update Books</h1>

         <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Book Price</th>
          <th>Author Name</th>
          <th>Publish Year</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    {ans}
        </tbody>
        </Table>
        </>
    )
}
export default Update;
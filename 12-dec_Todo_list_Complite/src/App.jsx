import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editDataSave, completeTask, uncompleteTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
 const Data= useSelector((state)=>state.todo.task);
const dispatch= useDispatch();
 const [val, setVal]=useState("");
 const [btnStatus, setBtnStatus]=useState(true);
 const [newid, setNewid]= useState("");
 console.log(Data);
  const handleSubmit=()=>{
    dispatch(addTask({id:Date.now(), work:val, status:"uncomplete"}))
  }
  const recDel=(id)=>{
    dispatch(deleteTask({id:id}))
  }
  const editTask=(id, work)=>{
    setBtnStatus(false);
    setVal(work)
    setNewid(id)
  }
  const editSave=()=>{
    dispatch(editDataSave({id:newid, work:val}));
    setBtnStatus(true);
  }

  const taskComp=(id)=>{
       dispatch(completeTask({id:id}))
       setBtnComp(false);

  }

  const taskUncomplete=(id)=>{
    dispatch(uncompleteTask({id:id}))
    setBtnComp(true);
  }



let sn=0;
const ans=Data.map((key)=>{
  sn++;
  return(
    <>
      <tr>
        <td> {sn} </td>
        <td>
          
          {key.status=="complete"? (<span style={{color:'red',  textDecoration:'line-through' }}>{key.work}</span>) : (key.work)}
           
           
           </td>
        <td>  <button onClick={()=>{recDel(key.id)}}> Delete </button> </td>
        <td> 
          <button onClick={()=>{editTask(key.id, key.work)}}> Edit</button>
        </td>
        <td>

              {key.status=="uncomplete"?(
                <>
                <button onClick={()=>{taskComp(key.id)}}> Complete </button>
                </>
              ):(
                <>
                     
                     <button onClick={()=>{taskUncomplete(key.id)}}>Uncomplete</button>  
                </>
              )}


          
       
         
        </td>
      </tr>
    </>
  )
})

  return(
    <>
      <h1> To Do App</h1>
      Enter task : <input type="text" value={val} 
      onChange={(e)=>{setVal(e.target.value)}} />
        {btnStatus?  <button onClick={handleSubmit} >Add</button> : 
        <button onClick={()=>{editSave()}}>Edit save</button>}
      <hr size="1" color="red" />
      <table>
        <tr>
          <th> Sno</th>
          <th>Work </th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default App;
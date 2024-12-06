import { useState } from "react"

const App=()=>{
  const [name, setName]=useState("");
  const [city, setCity]=useState("");

 const handleSubmit=()=>{
    alert("name:" +name+ " city : "+city);

 }

  return(

<>
<h1>Application from!</h1>
Enter name: <input type="text"
value={name} onChange={(e)=>{setName(e.target.value)}}/>
<br />
Enter city: <input type="text"
value={city} onChange={(e)=>{setCity(e.target.value)}}/>
<br />
<button onClick={handleSubmit}>click her</button>
</>
  )
}
export default App; 



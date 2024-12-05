// // import { useState } from "react";

// // const App=()=>{
// //     const [city,setCity]= useState("Bhopal");
// //     const myval=()=>{
// //         setCity("Chhindwara")
// //     }
// //     return(
// //         <>
// //         <h1>Welcome To : {city} </h1>
// //         <button onClick={myval}>click here</button>
// //         </>
// //     )
// // }
// // export default App;





// import { useState } from "react";

// const App=()=>{
//     const [color,setColor]= useState("red");
//     // const myval=()=>{
//     //     setColor("pink")
    
//     return(
//         <>
//         <h1 style={{color:color}}>Welcome To :{color} </h1>
        
//         <button onClick={()=>{setColor("yellow")}}>yellow</button>
//         <button onClick={()=>{setColor("blue")}}>blue</button>
//         <button onClick={()=>{setColor("black")}}>black</button>
//         <button onClick={()=>{setColor("orange")}}>orange</button>
//         </>
//     )
// }
// export default App;



import { useState } from "react";

 const App=()=>{
     const [cnt,setCnt]= useState(0);
    
    const myInc=()=>{
        setCnt(cnt+1)
    }
    const myDec=()=>{
        if (cnt<=0){
            alert("You cant decremnt less then zero")
        }
        else{
            setCnt(cnt-1)
        }
    }
    return(
        <>
        <center>
            <h1>My Counter :{cnt}</h1>
            <button onClick={myInc}>Increment</button>
            <button onClick={myDec}>Decremnt</button>
            <button onClick={()=>(setCnt(0))}>Refress</button>
        </center>
        
        </>
    )
    
    }


 export default App;
// React Evant
// const App=()=>{
//   const display=()=>{
//     alert("Evant")
//   }
//   return(
//   <>
//   <h1>welcome</h1>
//   <button onClick={display}>click here</button>
//   </>
//   )
// }

//  export default App;


// const App=()=>{
//   const name=(nm)=>{
//     alert(`my name is: ${nm}`)
//   }
//   return(
//      <>
//      <h1>Welcome</h1>
//      <button onClick={()=>{name("Danish")}}>click here</button>
     
     
//      </>


//   )
// }
// export default App;


// const App=()=>{
//     const display=(nm,d)=>{
//       console.log(d);
//        alert(` name : ${nm} Event: ${d.type}`)
//      }
//      return(
//        <>
//         <h1>Welcome</h1>
//        <button onClick={(d)=>{display("Danish",d)}}>click here</button>
//        </>
//      )
//     }
//     export default App;

const App=()=>{

  const display=(e)=>{
    alert("This is Event: "+ e.type);


  }
  return(
    <>
    
    <button onClick={display}>click here</button>
    </>
  )
}

export default App;



// const App=()=>{
//    const myval=(e)=>{
//     let nm=e.target.name;
//     let val=e.target.value;
//     alert("Name: "+ nm + "value: "+val);
//    }
// return(
//    <>
//    <h1>Welcome</h1>
//    <button name="danish" value="xyz" onClick={myval}>click here</button>
   
//    </>


// )

// }

// export default App;


// ---------------------------------------------------------------------------
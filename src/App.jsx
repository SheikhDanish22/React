
// // const App=()=>{
// //     const name=["name","sname","fname","mname"];
// //     const data=name.map((item)=>{
// //     return(
// //         <>
// //   <h1> {item}</h1>
// //         </>
// //     )
// // })
// // return(
// //     <>
    
// //     {data}
// //     </>
// // )
// // }
// // export default App;


// const sub=["php","orcale","java"]
// const ans=sub.map((key)=><option>{key}</option>)
//    const App=()=>{
//     return(
//         <>
        
//         <h1>Welcome</h1>
//         <select>
//             {ans}
//         </select>
//         </>
//     )
// }
// export default App;


const stu=[
{
    "rollno":121,
    "name":"Rahul",
    "city":"bhopal"
},
{
    "rollno":122,
    "name":"Rahul",
    "city":"bhopal"
},
{
    "rollno":123,
    "name":"neeraj",
    "city":"bhopal"
},
{
    "rollno":124,
    "name":"vikas",
    "city":"bhopal"
}


]

const ans=stu.map((key)=>{
    return(
        <>
        
        <tr>
           <td>{key.rollno}</td>
           <td>{key.name}</td>
           <td>{key.city}</td>

        </tr>
        
        
        </>
    )
})
const App=()=>{
    return(
        <>
        <table border="2" width="400px">
            <tr align="center">
                <th>rollno</th>
                <th>name</th>
                <th>city</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;
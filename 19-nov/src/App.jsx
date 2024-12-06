// hook use effact
// import { useState,useEffect } from "react";
// const App=()=>{
//    const [count,setCount]=useState(0);
//    useEffect(()=>{
//     setTimeout(()=>{
//         (count+1)
//    },1000);
//    },[])
//     return(
//         <>
        
//         <h1>My counter: {count}</h1>
//         </>
//     )
// }
// export default App;




// import { useState,useEffect } from "react";
// const App=()=>{
//    const [count,setCount]=useState(0);
//    useEffect(()=>{

//     setTimeout(()=>{
//         setCount(count+1)
//     },1000);
// }, []);
// return(
// <>
// <h1>my count:{count}</h1>

// </>
// )
//     }

//     export default App;





// import { useState,useEffect } from "react";
// const App=()=>{
//     const [cnt, setCnt]=useState(0);
//     const[multi,setMulti]=useState(0);
//     const mycounter=()=>{
//         setCnt(cnt+1);
//     }

//     useEffect(()=>{
//         setMulti(cnt*2);
//     }, [cnt])

//     return(
//         <>
        
//         <center>
//         <h1>My counter:{cnt}</h1>
//         <h2>Mul:{multi}</h2>
//         <button onClick={mycounter}>Click Here</button>
//         </center>
//         </>
//     )
//  }
// export default App;

import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{
    const [Mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="https://jsonplaceholder.org/comments";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res);
        });
    }
    useEffect(()=>{
        loadData();
    }, [])
    const ans=Mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.id}</td>
            <td>{key.postId}</td>
            <td>{key.userId}</td>
            <td>{key.comment}</td>
        </tr>
        </>
    )
})
return(
    <>
    <h1>Live Api Data</h1>
    <table border="black" bgcolor="pink">
        <tr>
            <th>ID</th>
            <th>PostId</th>
            <th>UserId</th>
            <th>Comment</th>
        </tr>
        {ans}
    </table>
    
    </>
)
}
export default App;




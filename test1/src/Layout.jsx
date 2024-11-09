import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
           <Link to="home">Home</Link> |
           <Link to="about">About</Link> |
           <Link to="faculty">Faculty</Link>| 
           <Link to="Course">Course</Link>|
           <Link to="contect">Contect</Link>

           <hr size="4" color="red"/>

           <Outlet/>

           <hr size="4" color="red"/>
           Single Pade
        
        </>
    )
}
export default Layout;
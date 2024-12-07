import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(

     <>
     <Link to="home">Home</Link> |
     <Link to="Insert">Insert</Link> |
     <Link to="display">Dispaly</Link>
     <hr size="5" color="red" />
        <Outlet />     
        <hr size="5" color="red" />
        www.mycompany.com
     </>

    )   



}
export default Layout;
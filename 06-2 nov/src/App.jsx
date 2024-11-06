import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
const App=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="Home" element={<Home/>}/>
             <Route path="About" element={<About/>}/>
             <Route path="Contact" element={<Contact/>}/>
            
        </Route>
         

         </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}
export default App;
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Faculty from "./Faculty";
import Course from "./Course";
import Contect from "./Contect";
const App=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="Home" element={<Home/>}/>
             <Route path="About" element={<About/>}/>
             <Route path="faculty" element={<Faculty/>}/>
             <Route path="Course" element={<Course/>}/>
             <Route path="Contect" element={<Contect/>}/>
             
            
        </Route>
         

         </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}
export default App;
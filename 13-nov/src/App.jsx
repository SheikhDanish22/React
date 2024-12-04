import TopMenu from "./Components/TopMenu";
import Banner from "./Components/Banner";
import Home from "./Components/Home";
import Example from "./Components/Offcan";
import Formside from "./Components/Form";

const App=()=>{
  return(
  <>
  <TopMenu/>
  <aside style={{marginLeft:"100px"}}><Example/></aside>
  <Banner/>

  
  <Home/>
 

  
  </>
  )
}

export default App;



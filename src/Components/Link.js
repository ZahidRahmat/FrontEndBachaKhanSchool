import { Route,Routes } from "react-router-dom";
 import Login from "./Logo";
 import HomePage from "./HomePage";
 import Signup from "./Signup";
 
 import Adminpage from "./Adminpage";




 function Link(){
 return(
      <div>
          <Routes>
               <Route path="/" element={<HomePage/>}/>
              <Route  path="/Logo" element={<Login/>}/>
               <Route path="/signup"  element={<Signup/>}/>
               <Route path="/AdminPage" element={<Adminpage/>}/>
              
                

           </Routes>

        </div>
    )
}
 export default Link;
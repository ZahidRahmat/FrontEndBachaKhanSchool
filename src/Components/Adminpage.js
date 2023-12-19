import { Link } from "react-router-dom";
import "./Css/Adminpage.css";
import logo from './Images/logo.jpg';
// import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AttendanceChart from "./AttendanceChart";
import EnrollmentChart from "./EnrollmentChart";
import CustomComponent from "./CustomComponent.js";
import { IoIosPersonAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaBookmark } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { AiFillBell } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import ahmadzia from './Images/ahmadzia.jpg';
function Adminpage() {
  return (
    <div>
    <Header/>
    
  <div class="form-select" style={{border:"1px solid"}}>
  <img src={ahmadzia}  className="iii" alt="Ms. Johnson" />
  <h2 style={{marginTop:"-50px",marginLeft:"70px"}}>
    Admin
    <br>
    </br>
    Ahmad@gmail.com
  </h2>
  <div className="form" style={{marginLeft:"-64px", marginTop:"-40px", width:"50px", height:"60px"}}>
    <AiFillBell style={{border:"1px solid"}}/>
    <div style={{marginLeft:"-250px",marginTop:"-20px"}}>
      <h2>
        Search
      </h2>
      <CiSearch style={{marginTop:"-65px", marginLeft:"-30px",}}/>
    </div>
    <div style={{marginLeft:"-900px",marginTop:"-50px"}}>
      <h2>
        Bacha Khan High School
      </h2>
    </div>
    </div>
</div>

   <>
      
      <div className="the_admin" >

        <div className="the_second" style={{border:"1px solid",height:"1000px", marginTop:"-60px"}}>
         
          <div className=" the_style_for_admin icon_container">         
            <div>
            <img id='ontop' src={logo} alt="Bacha Khan School" style={{ width: "100px",height:"100px", marginLeft:"40px", marginTop:"10px"}}/>
            <div className="Menu">
            <h4>Menu</h4>
            </div>
            </div>
            <a className="navbar-brand" href="./AddStudent">

              <span>
                <IoIosPersonAdd />
              </span>
              Add Student
            </a>

            <a className="navbar-brand" href="./DeleteStudent">
              <span>
                <MdDelete />
              </span>
              Delete Student
            </a>

            <a className="navbar-brand" href="./ViewStudent">
              <span>
                <CiViewList />
              </span>
              View Student
            </a>

            <a className="navbar-brand" href="./UpdateStudent">
              <span>
                <GrDocumentUpdate />
              </span>
              Update Student
            </a>

            <a className="navbar-brand" href="./Favorite">
              <span>
                <FaBookmark />
              </span>
              Favorite
            </a>

            <a className="navbar-brand" href="./ShowAddStudent">
              <span>
                <CiViewList />
              </span>
              View Students
            </a>

            <a className="navbar-brand" href="./FeedbackDisplay">
              <span>
                <AiFillMessage />
              </span>
              Feed back
            </a>
            <br>
            </br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>        
            <a className="navbar-brand" href="./FeedbackDisplay">
              <span>
              
              <CiLogout />
             </span>
              Log Out
            </a>

          </div>
        </div>
        
         
        <div className="the_third">
         
          <CustomComponent />
          <AttendanceChart />
          <EnrollmentChart />
          
        </div>


      </div>
      
      <div>
        <Footer />
      </div>
    </>
     </div>
  );
}

export default Adminpage;

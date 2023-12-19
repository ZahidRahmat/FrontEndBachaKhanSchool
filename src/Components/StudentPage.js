
import Header from "./Header";
import Footer from "./Footer";
import AttendanceChart from "./AttendanceChart";
import EnrollmentChart from "./EnrollmentChart";
import CustomComponent from "./CustomComponent.js";
import './Css/StudentPage.css';
function StudentPage() {
    return ( 
 
    <div>
    <Header/>

  <div className="the_student">
 
{/*    
  <h3 >
          Admin Page
        </h3> */}
        <div  className="the_second_student">

        
  
      <div className="Student_Style" >
    
       
              <a className="navbar-brand" href="./Registration">Student Registration</a>
             
              <a className="navbar-brand" href="./Course">Student Course</a>
             
              <a className="navbar-brand" href="./Result">Student Result</a>
              
              <a className="navbar-brand" href="./Attendance">Student Attendance</a>
              
              <a className="navbar-brand" href="./Subject">Sudent Subjects</a>

              <a className="navbar-brand" href="./Timetable">Student Time Table</a>
              
           
      </div>
      <div className="the_third_student">
        <h1>
          <CustomComponent/>
         <AttendanceChart/>
         <EnrollmentChart/>
          
        </h1>
      </div>
      </div>
 
  
  </div>
  <div>
  <Footer/>
  </div>
  </div>
     );
}

export default StudentPage;
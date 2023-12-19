import { useState} from 'react'
import {addApplicant} from '../Services/api';
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Css/Adminpage.css";
import logo from './Images/logo.jpg';
// import { useEffect } from "react";
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
function AddApplicant() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setfattherName] = useState("");
  const [rollNumber, setrollNumber] = useState("");
  const [Grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [myFile, setmyFile] = useState("");
  const [applicantData , setApplicantData] = useState("");

    
  // const handleFileUpload = async(e)=>{
  //   const myFile = e.target.myFile[0];
  //   const base64 =await convertToBase64(myFile);
    
  //   setApplicantData({...applicantData , myFile:base64});
  //   }
    


const handleChange = (e) => {
    setApplicantData({...applicantData,[e.target.name]: [e.target.value]})
}

 
const addDetails = async(e ) => {
  e.preventDefault();
  console.log(applicantData);
  const dataToSend = {
    firstName,
    lastName,
    fatherName,
    rollNumber,
    Grade,
    email,
    phoneNumber,
    address,
    myFile
  }
  await  addApplicant(dataToSend);
  alert("added successfully!");
  } 

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
            
        
        <div className="abc">
        <form>
           
            <label>FirstName</label>
            <input type = "text"  name= "First Name"
            onChange = {(e) => setFirstName(e.target.value)}
       
        
            />
            <label>LastName</label>
            <input type = "text"  name= "Last Name"
               onChange = {(e) => setLastName(e.target.value)}
            ></input>



            <label>fatherName</label>
            <input type = "text"  name= "Father Name"
            onChange = {(e) => setfattherName(e.target.value)}
    
            />
            <label>rollNumber</label>
            <input type = "text"  name= "Roll Number"
               onChange = {(e) => setrollNumber(e.target.value)}

            ></input>
            <label>Grade</label>
            <input type = "text"  name= "Grade"
               onChange = {(e) => setGrade(e.target.value)}

            ></input>

            <label>Email</label>
            <input type = "text"  name= "Email"
               onChange = {(e) => setEmail(e.target.value)}

            ></input>

            <label>PhoneNumber</label>
            <input type = "text"  name= "Phone Number"
               onChange = {(e) => setPhoneNumber(e.target.value)}

            ></input>

            <label>Address</label>
            <input type = "text"  name= "Address"
               onChange = {(e) => setAddress(e.target.value)}

            ></input>

            <label>Upload File</label>
            <input type = "text"  name= "My File"
               onChange = {(e) => setmyFile(e.target.value)}

            ></input>
{/* 
            <label>myFile</label>
            <input type="file"    name= "myFile"
            label="img"         id='file-upload'
            accept ='.jpeg , .png, .jpg'
               onChange={(e)=> setmyFile(e.target.value)}

            ></input>  */}


            <button
            className="btn btn-success"
               onClick = {(e) => addDetails(e)}
            >Add Student</button>
        </form>
        
        </div>
        
              
           
     
     
           </div>
           
           <div>
             <Footer />
           </div>
         </>
          </div>
       );
     }
        


export default AddApplicant;

// function convertToBase64(myFile){
//     return new Promise((resolve , reject)=>{
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(myFile);
//       fileReader.onload=()=>{
//         resolve(fileReader.result);
  
//       };
//       fileReader.onerror = (error)=>{
//         reject(error);
//       };
//     });
//   };
  

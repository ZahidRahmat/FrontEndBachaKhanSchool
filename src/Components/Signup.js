import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Css/Signup.css";
import {addApplicant} from '../Services/api';
import axios from "axios";
function Signup() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [comform_Password, setcomform_Password] = useState("");
  const [applicantData , setApplicantData] = useState("");

  const handleChange = (e) => {
    setApplicantData({...applicantData,[e.target.name]: [e.target.value]})
}

  const handleSignup = async(e ) => {
    e.preventDefault();
    console.log(applicantData);
    const dataToSend = {
      firstName,
      lastName,
      email,
      Password,
      comform_Password
    }
    
    try {
      const response = await axios.post("http://localhost:5000/Addstudent/signup", dataToSend)
      console.log(response, 'res')
    } catch(e) {
      console.error(e, 'while signin up')
    }
    
  }
  

  return ( 
    <div>
      <Header/>
    
    <div className="abc">
    <form>
       
        <label>FirstName</label>
        <input type = "text"  name= "firstName"
        onChange = {(e) => setfirstName(e.target.value)}
   
    
        />
        <label>LastName</label>
        <input type = "text"  name= "lastName"
           onChange = {(e) => setlastName(e.target.value)}
        ></input>



<label>Email</label>
        <input type = "text"  name= "email"
           onChange = {(e) => setemail(e.target.value)}

        ></input>

<label>Password</label>
        <input type = "text"  name= "Password"
           onChange = {(e) => setPassword(e.target.value)}

        ></input>

<label>Comform_Password</label>
        <input type = "text"  name= "comform_Password"
           onChange = {(e) => setcomform_Password(e.target.value)}

        ></input>

        <button
        className="btn btn-success"
           onClick = {(e) => handleSignup(e)}
        >Sign Up</button>
    </form>
    
    </div>
    <div>
      <Footer/>
    </div>
    </div>
 );
}

export default Signup;

function convertToBase64(file){
return new Promise((resolve , reject)=>{
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload=()=>{
    resolve(fileReader.result);

  };
  fileReader.onerror = (error)=>{
    reject(error);
  };
});
};






// import { useState} from 'react'
// // import { addApplicant } from '../service/api';
// import {addApplicant} from '../Services/api'
// function AddApplicant() {

//  const [applicantData , setApplicantData] = useState({
//     studentName :"",
//     registrationNumber :"",
//     contactNo : "",
//     address : "",
//     myFile:"",
//     phone:""

//  })

// // destructure


// const handleFileUpload = async(e)=>{
//     const file = e.target.files[0];
//     const base64 =await convertToBase64(file);
    
//     setApplicantData({...applicantData , myFile:base64});
//     }


// const handleChange = (e) => {
//     setApplicantData({...applicantData,[e.target.name]: [e.target.value]})
// }

 
// const addDetails = async(e ) => {
//     e.preventDefault();
//   await  addApplicant(applicantData);
//   alert("added successfully!");
// } 




//     return ( 
//         <>
//         <form>
           
//             <label>Student Name</label>
//             <input type = "text"  name= "studentName"
//             onChange = {(e) => handleChange(e)}
       
        
//             />
//             <label>RegesterationNumber</label>
//             <input type = "text"  name= "registrationNumber"
//                onChange = {(e) => handleChange(e)}
//             ></input>



// <label>contactNo</label>
//             <input type = "text"  name= "contactNo"
//             onChange = {(e) => handleChange(e)}
    
//             />
//             <label>Address</label>
//             <input type = "text"  name= "address"
//                onChange = {(e) => handleChange(e)}

//             ></input>

// <input 
// type="file"
// name="myFile"
// label="image"
// id='file-upload'
// accept ='.jpeg , .png, .jpg'
// onChange={(e) => handleFileUpload(e)}


// />


// <div class="col-md-11  mx-3">
//     <label  class="form-label">phone no</label>
//     <input 
//     type="text"
//      class="form-control"  
//      name= "phone"
//     onChange = {(e) => handleChange(e)}
//       required/>



// </div>


//             <button
//                onClick = {(e) => addDetails(e)}
//             >apply</button>
//         </form>
//         </>
//      );
// }

// export default AddApplicant;

// function convertToBase64(file){
//     return new Promise((resolve , reject)=>{
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload=()=>{
//         resolve(fileReader.result);
  
//       };
//       fileReader.onerror = (error)=>{
//         reject(error);
//       };
//     });
//   };
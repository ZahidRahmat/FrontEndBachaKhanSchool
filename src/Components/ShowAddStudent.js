import { useEffect, useState } from "react";
import { getApplicant } from "../Services/api";
import {Link } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";
import elyas from './Images/elyas.jpg';
function ShowAddStudent() {
  const [getData,setGetData]=useState([])
  const [applicantData, setApplicantData] = useState([{
    firstName:"",
    lastName:"",
    fatherName:"",
    rollNumber:"",
    Grade:"",
    email:"",
    phoneNumber:"",
    address:"",
    myFile:""
  }]); 

  const [show, setShow] = useState(false); 

    useEffect(() =>{
    getApplicatsDetails();
  },[]);
 
 const getApplicatsDetails =async () =>
 {
   const result = await getApplicant();
   console.log(result)
   setApplicantData(result.data);
 }

//  const deleteUser =( rollNumber, firstName) => {
//   alert ("Are you sure you want to Delete");
//  };

const updatedata=(id)=>{
  alert(id)
  
}
const updating= async(id)=>{
  setShow(true)

  const result= await fetch(`http://localhost:5000/Addstudent/${id}`
  )
  const response= await result.json();
  setApplicantData({...response,id:response.id})

}
const updated=()=>{

}

const eventchange=(fieldName,value)=>{
  setApplicantData(prevstate =>({
    ...prevstate,
    [fieldName]:value,
  }));

};

    return ( 
        <div>

        
        <Header/>
         <h1 style={{marginLeft:"600px"}}>
            View Students
         </h1>


         <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">last Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Roll Number</th>
      <th scope="col">Grade</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">File</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{
    applicantData.map((details) =>(
        
        <tr>
     
        <td>{details.FirstName}</td>
        <td>{details.LastName}</td>
        <td>{details.fatherName}</td>
        <td>{details.rollNumber}</td>
        <td>{details.Grade}</td>
        <td>{details.Email}</td>
        <td>{details.PhoneNumber}</td>
        <td>{details.address}</td>
        <img style={{width:"150px", height:"150px", marginLeft:"-100px"}} src={details.myFile}/>   
        <button
    className="btn btn-primary bg-dark "
    onClick={()=>updatedata(details._id)}
    >editnow</button>        
      </tr>
    ))
}
 
   
  </tbody>
</table>

{
show && 
<div className="abc">
<form>
   
    <label>FirstName</label>
    <input type = "text"  name= "First Name"
    value={applicantData.firstName}
    onChange = {(e) => eventchange("firstName",e.target.value)}    />

</form>

</div>
}
<div style={{marginTop:"500px"}}>
  <Footer/>
</div>

</div>
     );
}

export default ShowAddStudent;
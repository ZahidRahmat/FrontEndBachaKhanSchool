import { useEffect, useState } from "react";
// import { getApplicant } from "../service/api.js";
import { getApplicant } from "../Services/api";
import {Link } from "react-router-dom"

 
function ViewApplicant() {
    const [applicantData, setApplicantData] = useState([]); 
    useEffect(() =>{
   getApplicatsDetails();
    },[]);

 const getApplicatsDetails =async () =>
 {
   const result = await getApplicant();
   setApplicantData(result.data);
 }

    return ( 
        <>
     
         <h1>
            Customers
         </h1>


         <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">REg</th>
      <th scope="col">contactNo</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
{
    applicantData.map((details) =>(
        
        <tr>
     
        <td>{details.studentName}</td>
        <td>{details.registrationNumber}</td>
        <td>{details.contactNo}</td>
        <td>{details.address}</td>
        <img src={details.myFile}/>
        
        
<Link to={`/hostelApplicants/${details.id}`}>

  <button className="btn btn-edit">un</button>
</Link>
 
         
        
      </tr>
    ))
}
 
   
  </tbody>
</table>

        </>
     );
}

export default ViewApplicant;
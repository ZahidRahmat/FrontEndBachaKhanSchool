
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
// const {studentName, 
//     registrationNumber,
//     contactNo,
//     address
// } = applicantData;

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
import { useState } from 'react';
// import { addApplicant } from '../service/api';
import { addApplicant } from '../Services/api';

function AddApplicant() {
  const [applicantData, setApplicantData] = useState({
    studentName: '',
    registrationNumber: '',
    contactNo: '',
    address: '',
    myFile: '',
    phone: '',
  });

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   convertToBase64(file)
  //     .then((base64) => setApplicantData({ ...applicantData, myFile: base64 }))
  //     .catch((error) => console.error(error));
  // };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      convertToBase64(file)
        .then((base64) => setApplicantData({ ...applicantData, myFile: base64 }))
        .catch((error) => console.error(error));
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicantData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addDetails = async (e) => {
    e.preventDefault();
    try {
      await addApplicant(applicantData);
      alert('Added successfully!');
    } catch (error) {
      console.error('Error adding applicant:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <>
      <form>
        {/* ... */}
        <input
          type="file"
          name="myFile"
          label="image"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        {/* ... */}
        <button onClick={(e) => addDetails(e)}>Apply</button>
      </form>
    </>
  );
}

export default AddApplicant;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

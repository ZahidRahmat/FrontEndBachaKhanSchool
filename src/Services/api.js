import axios from "axios";

const url = "http://localhost:5000";

export const addApplicant = async (applicantData) => {
  console.log(applicantData);
  return await  axios.post(`${url}/Addstudent`, applicantData);
} 

export const getApplicant = async ()=> {
  return await  axios.get(`${url}/Addstudent/get_students`);
}



export const DeleteStudent = async (rollNumber) => {
  
  try {
    const response = await axios.delete(`${url}/Deleterecord/rollNumber?rollNumber=${rollNumber}`);
    
    if (response.data.message === 'deleted') alert('deleted')

    else if (response.data.message === 'not found') alert("roll number is incorrect")
    
    return response.data;
  } 
  
  catch (error) {
    console.log();console.error('Axios error:', error);
    throw error;
  }
};


import React, {useState} from 'react';
import './Css/Registration.css';
import Header from './Header';
import Footer from './Footer';
function Registration() {

  const [formData, setFormData] = useState({
    name: '',
    studentNumber: '', 
    yearLevel: '',
    email: '',
    phoneNumber: '',
    networkProvider: '',
    birthDate: '',
    presentAddress: '',
    presentAddress2: '',
    presentCity: '',
    presentState: '',
    presentZip: '',
    permanentAddress: '',
    permanentAddress2: '', 
    permanentCity: '',
    permanentState: '',
    permanentZip: '',
    emergencyContactName: '',
    emergencyRelationship: '',
    emergencyAddress: '',
    emergencyAddress2: '',
    emergencyCity: '',
    emergencyState: '',
    emergencyZip: '',
    emergencyPhone: '',
    emergencyEmail: '',
    achievements: null,
    activities: '',
    extraCurriculars: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleFile = (e) => {
    setFormData({
      ...formData,
      achievements: e.target.files[0]
    });
  }

  return (
    <div>
      <Header/>

      <form className='Zahid'>
        <h3 className='HA'>Basic Information</h3>

        <div>
          <label className='Lable_log'>Full Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange} 
          />
        </div>

        <div>
          <label className='Lable_log'>Student Number</label>
          <input
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
          />
        </div>

        {/* Other inputs */}

        <h3 className='HA'>Academic Background</h3>
        
        <div>
          <label className='Lable_log'>Achievements</label>
          <input
            type="file"
            onChange={handleFile} 
          />
        </div>

        <div>
          <label className='Lable_log'>Activities</label>
          <textarea
            name="activities"
            value={formData.activities}
            onChange={handleChange}
          />
        </div>

        {/* // Inside the form */}

<div>
  <label className='Lable_log'>Year Level</label>
  <select className='Select_log' 
    name="yearLevel"
    value={formData.yearLevel}
    onChange={handleChange}
  >
    <option value="">Select Year Level</option>
    <option value="1">1st Year</option>
    <option value="2">2nd Year</option>
    {/* // etc */}
  </select>
</div>



<div>
  <label className='Lable_log'>Email</label>   
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
</div>

{/* // Other inputs */}

<div>
  <label className='Lable_log'>Present Address</label>
  <input
    name="presentAddress"
    value={formData.presentAddress}
    onChange={handleChange}
  />
</div>

<div>
  <label className='Lable_log'>Present Address 2</label>
  <input
    name="presentAddress2"
    value={formData.presentAddress2} 
    onChange={handleChange}
  />  
</div>

{/* // Other address fields */}

<div>
  <label className='Lable_log'>Emergency Contact Name</label>
  <input
    name="emergencyContactName" className='Input_log'
    value={formData.emergencyContactName}
    onChange={handleChange}
  /> 
</div>

{/* // Other emergency contact fields   */}

<div>
  <label className='Lable_log'>Extracurricular Activities</label>
  <textarea
    name="extracurriculars"
    value={formData.extracurriculars}
    onChange={handleChange}
  />
</div>

{/* // Rest of form */}
        <button  className="Button_log" type="submit">Register</button>
      </form>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Registration;
    
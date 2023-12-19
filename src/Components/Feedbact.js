
import React, { useState } from 'react';
import './Css/Feedback.css';
import Header from './Header';
import Footer from './Footer';

function Feedbact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    comments: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully!');
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className='the'>
        <div className="feedback-form">
          <h2>Feedback Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="role">I am a:</label>
              <select id="role" value={formData.role} onChange={handleChange}>
                <option>Student</option>
                <option>Parent</option>
                <option>Teacher</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea id="comments" value={formData.comments} onChange={handleChange}></textarea>
            </div>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedbact;



// import './Css/Feedback.css'
// import Header from './Header';
// import Footer from './Footer';
// function Feedback() {
//     return (
//         <div>
//         <Header/>
//       <div className='the'>
  
      
//       <div className="feedback-form">
//         <h2>Feedback Form</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" />
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="role">I am a:</label>  
//             <select id="role">
//               <option>Student</option>
//               <option>Parent</option>
//               <option>Teacher</option>
//             </select>
//           </div>
  
//           <div className="form-group">
//             <label htmlFor="comments">Comments:</label>
//             <textarea id="comments"></textarea>
//           </div>
  
//           <button type="submit">Submit Feedback</button>
//         </form>
//       </div>
//       </div>
//       <div>
//       <Footer/>
//       </div>
//       </div>
//     );
//   }
  
//   export default Feedback;
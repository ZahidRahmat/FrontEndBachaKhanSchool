

import React, { useEffect, useState, useRef } from 'react';
import './Css/login.css';
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");

  const Reference = useRef(null);
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [selectedRole, setSelectedRole] = useState('Admin'); // Default to Admin

  useEffect(() => {
    Reference.current.focus();
  }, []);

  const handleLogin = async () => {
    

    const dataToSend = {
      email,
      password
    }

    try {
      const response = await axios.post("http://localhost:5000/Addstudent/login", dataToSend)
      console.log(response, 'res')

      if (response.data.message === "exists") {
        navigate("/adminpage")
        
      }
      else if (response.data.message === "notfound") return alert("user not found")
    } 
    
    catch(e) {
      console.error(e, 'while signin up')
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Column */}
          </div>
          <div className="login-box">
            <div className="col">
              <form>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10" style={{ marginLeft: "150px" }}>
                    <input
                    onChange={e => setemail(e.target.value)} 
                    ref={Reference} 
                    type="email" 
                    className="form-control" 
                    id="inputEmail3" 
                  />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10" style={{ marginLeft: "150px" }}>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword3" />
                  </div>
                </div>
                <div className="form_login">
                  <label htmlFor="role">I am a:</label>
                  <select id="new" onChange={(e) => setSelectedRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                </div>
                {/* <Link to='/adminpage' className='login-btn' style={{marginTop:"20px"}}>Logo</Link> */}
                <button type="button" className="login-btn" onClick={handleLogin}>
                  Login
                </button>
               
              </form>
             
            </div>
          </div>
          <div className="col">
            {/* Column */}
          </div>
        </div>
      </div>
      <div>
                <Footer />
              </div>
    </div>
  );
}

export default Login;


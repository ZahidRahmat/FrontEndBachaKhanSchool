import { Link } from 'react-router-dom';
import './Css/Header.css';
import logo from './Images/logo.jpg';

function Header(){
    return(
        <div>
        <div className='top'>
           <div class="container text-center">
    <div class="row">
    <div class="col">
    <img id='ontop' src={logo} alt="Bacha Khan School" style={{marginRight:"200px"}}/>
       </div>
    <div class="col">
    <h2 id="line1"> Bacha Khan School</h2>
    <h1 id="line1"> باچا خان ښوونځی</h1>
    <h1 id="line2"> Learn Today, Lead Tomorrow </h1>
    <h1 id="line2"> نن زده کړه، سبا رهبري وکړه </h1>
    <div className="col login-signup-container">
    <Link  to ='/Logo' className='login'>Login</Link>
    <Link to='/signup' className='signup'>Sign Up</Link>
    <Link to='/Feedback' className='Feedback'>Feedback</Link>
    <Link to='/AboutUs' className='AboutUs'>AboutUs</Link>
    <Link to='/HomePage' className='HomePage'>Home</Link>
    <Link to='/CoursesPage' className='CouresPage'>Courses</Link>
    <Link to='/StudentP' className='StudentP'>Student</Link>
    
</div>

    </div>
    <div class="col">
    

    </div>
  </div>
</div>
</div>
</div>
       
     

    )
}
export default Header;
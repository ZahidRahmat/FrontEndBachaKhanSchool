import logo from './Images/logo.jpg'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Css/Footer.css';
import { Link } from 'react-router-dom';
function Footer(){
  return(
    <div className='Footer'>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img id='logo' src={logo} alt='logo'/>
            <p id='info'>If a student can’t learn in the way we teach, we must teach in a way the student can learn.
            <br>
            </br>
            Bacha khan school give her wings!</p>
          </div>
          <div className="col">
          
            <div className="col">
              <h2>SOCIAL MEDIA</h2>
              <div className="social-icons">
                <a href="https://www.facebook.com/bachakhanschool?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FaLinkedin />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h2>CONTACT DETAILS</h2>
            <p><FaMapMarkerAlt /> 
             Kabul city, 5th district, khushal khan Mena, close to Hazrat Sahib Masjid, Kabul, Afghanistan, 1010</p>
            <p><FaPhone /> Phone: +93 78 592 9394</p>
            <p><FaEnvelope /> Email: <a href="mailto:bachakhanschool@gmail.com" className="footer-link">bachakhanschool@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
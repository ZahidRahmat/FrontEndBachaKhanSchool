
import './Css/AboutUs.css';
import ahmadzia from './Images/ahmadzia.jpg';
import Header from './Header';
import Footer from './Footer';
import elyas from './Images/elyas.jpg';
import waiz from './Images/waiz.jpg';
import zarghon from './Images/Zarghon.jpg';
function AboutUs() {

  return (
    <div>
      <Header/>
    <div className="about-page">
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.  
      </p>

      <h2>Our History</h2>

      <p>
        Founded in 2010, our school has grown from a small homeschooling group to a full fledged online school.
        We believe in nurturing students' interests and letting their curiosity guide our instruction.
      </p>

      <h2>Our Mission</h2>

      <ul>
  <li>Offering a balanced curriculum tailored to each student's interests, strengths, and goals.</li>
  <li>Cultivating critical thinking, creativity, and collaboration through project-based learning.</li>
  <li>Personalizing instruction to encourage students' natural curiosity.</li>
  <li>Fostering a diverse, inclusive community where every student feels safe, seen, and valued.</li>
</ul>

      <h2>Meet Our Staff</h2>

      <div className="teacher">
  <img src={ahmadzia} alt="Ms. Johnson" />
  <h3>Mr. Ahmad Zia Fateh</h3>
  <p>
  Mr. Ahmad Zia Fateh has been teaching 4th grade at our school for 8 years. She loves bringing science and social studies to life through interactive, hands-on projects. Ms. Johnson sponsors the gardening club and enjoys nurturing students' curiosity through nature exploration.   
  </p>
</div>

<div className="teacher">
  <img src={waiz} alt="Mr. Nouman" />
  <h3>Mr. Nouman</h3>
  <p>
  Mr. Nouman teaches 7th and 8th grade math. He has been an educator for over 20 years. Mr. Lee finds creative ways to make math engaging through real-world examples, math games, and digital tools. He sponsors the chess club and math club.
  </p>  
</div>

<div className="teacher">
  <img src={elyas} alt="Mrs. Ali"/>
  <h3>Mr. Mohammad Elyas Rahmat</h3>
  <p>
    Mr. Mohammad Elyas Rahmat teaches high school biology and serves as the lead science teacher. She has a Masters in Science Education and 12 years of experience. Mrs. Ali believes science is best learned by doing through labs, experiments, and hands-on projects. 
  </p>
</div>

<div className="teacher">
  <img src={zarghon} alt="Mr. Zarghon Alikozy" />
  <h3>Mr. Zarghon Alikozy</h3> 
  <p>
    Mr. Zarghon Alikozy teaches 9th and 10th grade English. He brings literature to life by incorporating film, art, and music into his lessons. Mr. Kim sponsors the school newspaper and yearbook programs. He is passionate about building students' communication skills.
  </p>
</div>

    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default AboutUs;
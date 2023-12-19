import student1 from './Images/student1.jpg';
import library from './Images/library.jpg';
import teacher from './Images/teacher.jpg';
import './Css/CousresPage.css';
import Header from './Header';
import Footer from './Footer';
import Quran from './Images/Quran.jpg';
import Histry from './Images/Histry.jpg';
import Geograpy from './Images/Geograpy.jpg';
import English from './Images/English.jpg';
import Dari from './Images/Dari.jpg';
import Chemistry from './Images/Chemistry.jpg';
import biology from './Images/biology.jpg';
import math from './Images/math.jpg';
import phsics from './Images/phsics.jpg';

function CoursesPage(){
return(
<div>
  <Header/>
<div id="carouselExampleDark" class="carousel carousel-dark slide">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={library} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bacha Khan High School</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={student1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bacha Khan High School</h1>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={teacher} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bacha Khan High School</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <hr class="featurette-divider"></hr>

  <div className="row" bis_skin_checked="1">

      <div className="col-lg-4" bis_skin_checked="1">
        <img src={English} alt="Ms. Johnson" width="145" height="140" className='img_the' />
        <h2 class="fw-normal">English</h2>
        <p>English Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://en.wikipedia.org/wiki/English_studies">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="2">
      <img src={Quran} alt="Ms. Johnson" width="145" height="140" className='img_the' />     
         <h2 class="fw-normal">Quran</h2>
        <p>Quran is the Holy Book of the Muslims Education Ministry of the Afghanistan Include in all Classes.</p>
        <p><a class="btn btn-secondary" href="https://quran.com/en">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="3">
      <img src={biology} alt="Ms. Johnson" width="145" height="140" className='img_the' />     
         <h2 class="fw-normal">Biology</h2>
        <p>Biology Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://www.britannica.com/science/biology">View details »</a></p>
      </div><hr class="featurette-divider"></hr>
      <div class="col-lg-4" bis_skin_checked="4">
      <img src={Chemistry} alt="Ms. Johnson" width="145" height="140" className='img_the' />      
        <h2 class="fw-normal">Chemistry</h2>
        <p>Chemistry Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://www.britannica.com/science/chemistry">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="5">
      <img src={Geograpy} alt="Ms. Johnson" width="145" height="140" className='img_the' />      
        <h2 class="fw-normal">Geography</h2>
        <p>Geography Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://kids.nationalgeographic.com/geography/countries/article/afghanistan">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="6">
      <img src={Histry} alt="Ms. Johnson" width="145" height="140" className='img_the' />       
       <h2 class="fw-normal">Pashto</h2>
        <p>Pashto is our national language this Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://en.unesco.org/silkroad/silk-road-themes/languages-and-endanger-languages/pashto">View details »</a></p>
      </div><hr class="featurette-divider"></hr>
      <div class="col-lg-4" bis_skin_checked="6">
      <img src={Dari} alt="Ms. Johnson" width="145" height="140" className='img_the' />       
       <h2 class="fw-normal">Dari</h2>
        <p>Dari is also our national language this Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://www.mustgo.com/worldlanguages/dari/">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="6">
      <img src={math} alt="Ms. Johnson" width="145" height="140" className='img_the' />       
       <h2 class="fw-normal">Math</h2>
        <p>Math Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://www.khanacademy.org/math">View details »</a></p>
      </div>
      <div class="col-lg-4" bis_skin_checked="6">
      <img src={phsics} alt="Ms. Johnson" width="145" height="140" className='img_the' />       
       <h2 class="fw-normal">Physics</h2>
        <p>Physics Subject is one of the Marif Subject that the Education Ministry of the Afghanistan Interduce.</p>
        <p><a class="btn btn-secondary" href="https://www.britannica.com/science/physics-science">View details »</a></p>
      </div><hr class="featurette-divider"></hr>
    </div>
    <hr class="featurette-divider"></hr>
  
  <div>
    <Footer/>
  </div>
</div>









</div>
)
}
export default CoursesPage;
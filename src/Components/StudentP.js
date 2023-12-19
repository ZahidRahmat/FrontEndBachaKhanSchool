import Footer from "./Footer";
import Header from "./Header";
import najeeb from './Images/najeeb.jpg';
import morteza from './Images/morteza.jpg';
import zahid from './Images/zahid.jpg';
import asim from './Images/asim.jpg';
import ahmadzia from './Images/ahmadzia.jpg';
import abdul from './Images/abdul.jpg';
import waiz from './Images/waiz.jpg';
import Qasim from './Images/Qasim.jpg';
import Zarghon from './Images/Zarghon.jpg';
import elyas from './Images/elyas.jpg';
import lala from './Images/lala.jpg';

import './Css/Studentp.css';

const students= [
    {
      id: 1,
      name: "Abdul Mosawer",
      fatherName: "Rahmat Gul",
      image: abdul,
    },
      {
        id: 2,
        name: "Hasem Ullah",
        fatherName: "Gul Din",
        image: asim,
      },
      {
        id: 3,
        name: "M. Zahid Rahmat",
        fatherName: "Rahmat gul",
        image: zahid,
      },
      {
        id: 4,
        name: "M.Elyas",
        fatherName: "Rahmat Gul",
        image: elyas,
      },
      {
        id: 5,
        name: "Mohammad Mortaza",
        fatherName: "Ahmad",
        image: morteza,
      },
      {
        id: 6,
        name: "M. Waiz Rahmat",
        fatherName: "Rahmat Gul",
        image: waiz,
      },
      {
        id: 7,
        name: "Ahmad Zia",
        fatherName: "Fasal Rabi",
        image: ahmadzia,
      },
      {
        id: 8,
        name: "Qasim",
        fatherName: "Fais",
        image: Qasim,
      },{
        id: 9,
        name: "Zarghon",
        fatherName: "Alokozay",
        image: Zarghon,
      },
      {
        id: 10,
        name: "Najeeb Ullah",
        fatherName: "Khalil",
        image: najeeb,
      },
     
     
      
      
    ];
function StudentP(){
return(
<div>
<Header/>
<div><hr class="featurette-divider"></hr>
    <h1 className='The_head'>List of the Top 3 Students of the School</h1>
<div class="row featurette" bis_skin_checked="1">
      <div class="col-md-7" bis_skin_checked="1">
        <h1 class="featurette-heading fw-normal lh-1">First Abdul Mosawer Rahmat. <span class="text-body-secondary"></span></h1>
        <p class="lead">Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’. The best way to gain self-confidence is to do what you are afraid to do. If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced.</p>
      </div>
      <div class="col-md-5" bis_skin_checked="1">
      <img src={lala} alt="Ms. Johnson" width="320" height="330" className='' />     
       </div>
    </div><hr class="featurette-divider"></hr>
    <div class="row featurette" bis_skin_checked="1">
      <div class="col-md-7 order-md-2" bis_skin_checked="1">
        <h1 class="featurette-heading fw-normal lh-1">Second Mohammad Elyas Rahmat. <span class="text-body-secondary"></span></h1>
        <p class="lead">If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced. Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’. The best way to gain self-confidence is to do what you are afraid to do. Courage doesn’t always roar.</p>
      </div>
      <div class="col-md-5 order-md-1" bis_skin_checked="1">
      <img src={elyas} alt="Ms. Johnson" width="320" height="330" className='' /> 
            </div>
    </div><hr class="featurette-divider"></hr>
    <div class="row featurette" bis_skin_checked="1">
      <div class="col-md-7" bis_skin_checked="1">
        <h1 class="featurette-heading fw-normal lh-1">Thrid Mohammad Waiz Rahmat. <span class="text-body-secondary"></span></h1>
        <p class="lead">The best way to gain self-confidence is to do what you are afraid to do. Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’. If you hear a voice within you say ‘you cannot paint,’ then by all means paint, and that voice will be silenced.</p>
      </div>
      <div class="col-md-5" bis_skin_checked="1">
      <img src={waiz} alt="Ms. Johnson" width="320" height="330" className='' /> 
      </div>
    </div><hr class="featurette-divider"></hr>
            <h1 className='The_head'>List of all Enroll Students of the School</h1>
            <div>
                {students.map(student => (
                    <div key={student.id} className="student-card">
                        <img src={student.image} alt={`${student.name}'s image`} />
                        <p>Name: {student.name}</p>
                        <p>Father's Name: {student.fatherName}</p>
                        <p>ID: {student.id}</p>
                        
                    </div>
                ))}
            </div>
        </div>

<div>
    <Footer/>
</div>
</div>
)
}
export default StudentP;
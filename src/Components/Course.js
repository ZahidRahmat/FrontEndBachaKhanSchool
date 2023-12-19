import Header from './Header';
import Footer from './Footer';
import './Css/Cousre.css';
function Course(){
    return(
<div>
<Header/>

      <div className="Kh">
      
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subject</th>
          <th scope="col">Teacher</th>
          
        </tr>
      </thead>
      <tbody>
        <tr className='change' >
          <th scope="row">1</th>
          <td>Math</td>
          <td>Obaid Ullah </td>
          <p><a class="btn btn-secondary" href="https://www.khanacademy.org/math">View details »</a></p>

        </tr>
        <tr className='change'>
          <th scope="row">2</th>
          <td>English</td>
          <td>Mohammad Waiz</td>
          <p><a class="btn btn-secondary" href="https://en.wikipedia.org/wiki/English_studies">View details »</a></p>

        </tr>
        <tr className='change'>
          <th scope="row">3</th>
          <td >Quran</td>
          <td>Mohammad Zahid</td>
          <p><a class="btn btn-secondary" href="https://quran.com/en">View details »</a></p>
        </tr>
        <tr className='change'>
          <th scope="row">4</th>
          <td>GeoGraphy</td>
          <td>Mohammad Rahim </td>
          <p><a class="btn btn-secondary" href="https://kids.nationalgeographic.com/geography/countries/article/afghanistan">View details »</a></p>

         
        </tr><tr className='change'>
          <th scope="row">5</th>
          <td>Biology</td>
          <td>Mohammad Karim </td>
          <p><a class="btn btn-secondary" href="https://www.britannica.com/science/biology">View details »</a></p>

         

        </tr><tr className='change'>
          <th scope="row">6</th>
          <td>Chemistry</td>
          <td>Abdul Mosawer</td>
          <p><a class="btn btn-secondary" href="https://www.britannica.com/science/chemistry">View details »</a></p>

          
        </tr><tr className='change'>
          <th scope="row">7</th>
          <td>Pashto</td>
          <td>Mohammad Usman</td>
          <p><a class="btn btn-secondary" href="https://en.unesco.org/silkroad/silk-road-themes/languages-and-endanger-languages/pashto">View details »</a></p>

        </tr><tr className='change'>
          <th scope="row">8</th>
          <td>Dari</td>
          <td>Zarghon Alokozay</td>
          <p><a class="btn btn-secondary" href="https://www.mustgo.com/worldlanguages/dari/">View details »</a></p>

          
        </tr>
      </tbody>
    </table>
    
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    )
    }
    export default Course;


    //     import Header from './Header';
// import Footer from './Footer';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Updated import statement for Course.css
// import './Course.css';

// const coursesData = [
//   { id: 1, subject: 'Math', teacher: 'Obaid Ullah' },
//   { id: 2, subject: 'English', teacher: 'Mohammad Waiz' },
//   { id: 3, subject: 'Quran', teacher: 'Mohammad Zahid' },
// ];

// function Course() {
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleSelect = (course) => {
//     setSelectedCourse(course);
//   };

//   return (
//     <div>
//       <Header />

//       <div className="Kh">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Subject</th>
//               <th scope="col">Teacher</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {coursesData.map((course) => (
//               <tr className="change" key={course.id}>
//                 <th scope="row">{course.id}</th>
//                 <td>{course.subject}</td>
//                 <td>{course.teacher}</td>
//                 <td>
//                   <Link
//                     to={`/subject`}
//                     className="btn btn-secondary"
//                     onClick={() => handleSelect(course)}
//                   >
//                     Select
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div>
//         <Footer />
//       </div>

//       {/* Render the Subject component with the selected course */}
//       {selectedCourse && <Subject selectedCourse={selectedCourse} />}
//     </div>
//   );
// }

// function Subject({ selectedCourse }) {
//   return (
//     <div>
//       <h2>Selected Course</h2>
//       <p>Course ID: {selectedCourse.id}</p>
//       <p>Subject: {selectedCourse.subject}</p>
//       <p>Teacher: {selectedCourse.teacher}</p>
//       {/* Display other course details */}
//     </div>
//   );
// }

// export default Course;

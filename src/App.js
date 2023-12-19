// import Testing from "./Testing";

// function App(){
//     return <Testing />
// }

// export default App;









import { Route, Routes } from "react-router-dom";
import Login from "./Components/Logo";
import HomePage from "./Components/HomePage";
import Signup from "./Components/Signup";
import Adminpage from "./Components/Adminpage";
// import AddStudent from "./Components/AddStudent";
import AddApplicant from "./Components/AddStudent";
import ViewStudent from "./Components/ViewStudent";
import DeleteStudent from "./Components/DeleteStudent";
import UpdateStudent from "./Components/UpdateStudent";
import Favorite from "./Components/Favorite";
import { useState } from "react";
import Feedback from "./Components/Feedbact";
import AboutUs from "./Components/AboutUs";
import Student from "./Components/StudentPage";
import Teacher from "./Components/TeacherPage";
import Course from "./Components/Course";
import Attendance from "./Components/Attendance";
import Registration from "./Components/Registration";
import Timetable from "./Components/Timetable";
import Subject from "./Components/Subject";
import Result from "./Components/Result";
import CoursesPage from "./Components/CousresPage";
import StudentP from "./Components/StudentP";
import SelectedCourse from './Components/Subject';
// import ShowAddStudent from './Components/ShowAddStudent';
import ViewApplicant from "./Components/ShowAddStudent";
import FeedbackDisplay from "./Components/FeedbackDisplay";

import Test from "./Test";
// import AddApplicant from "./Components/AddApplicant";

function App() {
    // return(
    //     <div>
    //         <Test/>
    //     </div>
    // )
    const [favorites, setFavorites] = useState([]);

    return (

        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Logo" element={<Login />} />
                <Route path="/Feedback" element={<Feedback />}/>
                <Route path="/AboutUs" element={<AboutUs/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/adminpage" element={<Adminpage />} />
                <Route path="/AddStudent" element={<AddApplicant />} />
                <Route path="/ViewStudent" element={<ViewStudent setFavorites={setFavorites} />} />
                <Route path="/UpdateStudent" element={<UpdateStudent />} />
                <Route path="/DeleteStudent" element={<DeleteStudent />} />
                <Route path="/Favorite" element={<Favorite favorites={favorites} />} />
                <Route path="/studentpage" element={<Student/>} />
                <Route path="/teacherpage" element={<Teacher/>} />
                <Route path="/Course" element={<Course/>} />
                <Route path="/Registration" element={<Registration/>} />
                <Route path="/Timetable" element={<Timetable/>} />
                <Route path="/Subject" element={<Subject/>} />
                <Route path="/Result" element={<Result/>} />
                <Route path="/CoursesPage" element={<CoursesPage/>}/>
                <Route path="/Attendance" element={<Attendance/>} />
                <Route path="/StudentP" element={<StudentP/>}/>
                <Route path="/ShowAddStudent" element={<ViewApplicant/>}/>
                <Route path="/FeedbackDisplay" element={<FeedbackDisplay/>}/>
        
            </Routes>
            {/* <Feedback/> */}
        </div>
    );
}

export default App;

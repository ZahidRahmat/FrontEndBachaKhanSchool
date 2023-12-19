function Subject(){
  return(
    <div>
      <h1>
        This is Subject Page
      </h1>
    </div>
  )
}
export default Subject;
// import React from 'react';

// // Sample data for courses
// const coursesData = [
//   { id: 1, subject: 'Math', teacher: 'Obaid Ullah' },
//   { id: 2, subject: 'English', teacher: 'Mohammad Waiz' },
//   { id: 3, subject: 'Quran', teacher: 'Mohammad Zahid' },
//   // Add more courses as needed
// ];

// function Subject({ match }) {
//   // Retrieve the selected course id from the URL
//   if (!match) {
//     return <div>Loading...</div>;
//   }

//   const courseId = parseInt(match.params.courseId, 10);

//   // Fetch the course details using courseId from your data source
//   const selectedCourse = coursesData.find((course) => course.id === courseId);

//   if (!selectedCourse) {
//     return <div>Course not found</div>;
//   }

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

// export default Subject;

import "./Css/Adminpage.css";
function CustomComponent() {

    const enrollment = 10;
    const attendance = 100; 
    const assignments = 0;
    
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        
        <div className="stats">

          <div className="metric">
            <span>Total Subjects</span>
            <h2>{enrollment}</h2>
          </div>
    
          <div className="metric">
            <span>Average Daily Attendance</span> 
            <h2>{attendance}%</h2>
          </div>
    
          <div className="metric">
            <span>Assignments Completed</span>
            <h2>{assignments}%</h2>
          </div>
        </div>
      </div>
    );
  }
  export default CustomComponent;
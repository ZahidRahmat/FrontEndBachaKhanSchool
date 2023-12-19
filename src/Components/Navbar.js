import {Link } from 'react-router-dom';
function Navbar() {
    return (  
        <>
        <div >
            <h1>Zahid</h1>
<Link  to= "/hostelApplicants">
    Apply
</Link>
<br></br>
<Link  to= "/viewApplicants">
    ViewApplicants
</Link>
        </div>
        </>
    );
}

export default Navbar;
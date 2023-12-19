
import React, { useEffect } from 'react';
import './Css/viewstudent.css';
import Header from './Header';
import Footer from './Footer';
function Favorite({ favorites }) {
    useEffect(() => {
        console.log('Favorites updated:', favorites);
    }, [favorites]);

    return (
        <div>
            <h1 className='head'>Favorites</h1>
            {favorites.map(student => (
                <div key={student.id} className="student-card">
                    <img src={student.image} alt={student.name} />
                    <h2>Name: {student.name}</h2>
                    <p>Father Name: {student.fatherName}</p>
                    <p>ID: {student.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Favorite;

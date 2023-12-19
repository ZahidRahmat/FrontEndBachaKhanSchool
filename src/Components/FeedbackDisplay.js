// FeedbackDisplay.js
import React, { useState, useEffect } from 'react';

const FeedbackDisplay = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get-feedback');
        if (response.ok) {
          const data = await response.json();
          setFeedbackData(data);
        } else {
          console.error('Failed to fetch feedback data');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Feedback Received</h2>
      <ul>
        {feedbackData.map((feedback, index) => (
          <li key={index}>
            <p>Name: {feedback.name}</p>
            <p>Email: {feedback.email}</p>
            <p>Role: {feedback.role}</p>
            <p>Comments: {feedback.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;
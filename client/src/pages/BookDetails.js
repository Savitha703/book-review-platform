import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/reviews?bookId=${id}`)
      .then(res => setReviews(res.data));
  }, [id]);

  return (
    <div>
      <h2>Book Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map(r => (
            <li key={r._id}>
              <strong>{r.reviewer}</strong>: {"⭐".repeat(r.rating)}<br />
              <em>{r.comment}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookDetails;


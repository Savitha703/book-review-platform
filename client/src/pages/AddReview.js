import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddReview = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    bookId: '',
    reviewer: '',
    comment: '',
    rating: 5
  });

  useEffect(() => {
    axios.get('http://localhost:5000/books').then(res => {
      setBooks(res.data);
      if (res.data.length > 0) {
        setForm(prev => ({ ...prev, bookId: res.data[0]._id }));
      }
    });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/reviews', form);
    alert('✅ Review submitted!');
    setForm({ bookId: '', reviewer: '', comment: '', rating: 5 });
  };

  return (
    <div className="container">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Book:</label><br />
          <select name="bookId" value={form.bookId} onChange={handleChange} required>
            {books.map(book => (
              <option key={book._id} value={book._id}>
                {book.title}
              </option>
            ))}
          </select>
        </div><br />
        <input name="reviewer" placeholder="Your name" value={form.reviewer} onChange={handleChange} required /><br />
        <textarea name="comment" placeholder="Your review" value={form.comment} onChange={handleChange} required /><br />
        <input name="rating" type="number" min="1" max="5" value={form.rating} onChange={handleChange} required /><br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;


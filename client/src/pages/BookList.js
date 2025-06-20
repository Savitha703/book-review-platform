import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">📚 Books</h2>
      <div className="d-grid gap-3">
        {books.map(book => (
          <Link
            to={`/books/${book._id}`}
            key={book._id}
            className="btn btn-primary btn-lg text-start"
          >
            <div>
              <strong>{book.title}</strong><br />
              <small className="text-light">{book.author}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;

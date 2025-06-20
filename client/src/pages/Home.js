import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center">
      <h2 className="mb-4">📖 Welcome to Book Review Platform</h2>
      <div className="d-grid gap-4 col-6 mx-auto">
        <Link to="/books" className="btn btn-primary btn-lg py-3 shadow rounded">
          📚 View All Books
        </Link>
        <Link to="/add-book" className="btn btn-success btn-lg py-3 shadow rounded">
          ➕ Add Book
        </Link>
        <Link to="/add-review" className="btn btn-warning btn-lg py-3 shadow rounded">
          ✍️ Add Review
        </Link>
      </div>
    </div>
  );
};

export default Home;



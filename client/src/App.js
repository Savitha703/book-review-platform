
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import AddReview from './pages/AddReview';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
          <Link to="/" className="navbar-brand">Book Review</Link>
          <div className="navbar-nav">
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/add-book" className="nav-link">Add Book</Link>
            <Link to="/add-review" className="nav-link">Add Review</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/add-review" element={<AddReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/books', form);
    alert('Book added!');
    setForm({ title: '', author: '', description: '' });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required /><br />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required /><br />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

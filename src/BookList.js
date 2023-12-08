import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://final-back-3qs3.onrender.com/');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/create-book" className="btn btn-info float-right">
          + Add New Book
        </Link>
        <br />
        <br />
        <hr />
      </div>
      <div className="list">
        {books.map((book) => (
          <div key={book._id} className="card-container">
            <img src={book.imageUrl} alt="Books" height="200" />
            <div className="desc">
              <h2>
                <Link to={`/show-book/${book._id}`}>{book.title}</Link>
              </h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;

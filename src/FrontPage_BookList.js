import React from 'react';
import { Link } from 'react-router-dom';

function FrontPage_BookList() {
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
        <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2>
              <a href="/show-book/123id">React.JS 101</a>
            </h2>
            <h3>Raymond Gallagher</h3>
            <p>Introduction to React.JS</p>
          </div>
        </div>
        {/* Additional book cards go here */}
      </div>
    </div>
  );
}

export default FrontPage_BookList;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './AddBook';
import './App.css';
import './styles.css';
import FrontPage_BookList from './FrontPage_BookList';
import BookList from './BookList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage_BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;

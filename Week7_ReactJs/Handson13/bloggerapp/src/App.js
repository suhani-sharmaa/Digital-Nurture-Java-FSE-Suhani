// src/App.js
import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div style={{ padding: '30px' }}>
      <h1>Blogger App</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowCourse(!showCourse)}>Toggle Courses</button>
        <button onClick={() => setShowBook(!showBook)} style={{ marginLeft: '10px' }}>Toggle Books</button>
        <button onClick={() => setShowBlog(!showBlog)} style={{ marginLeft: '10px' }}>Toggle Blogs</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CourseDetails show={showCourse} />
        <BookDetails show={showBook} />
        <BlogDetails show={showBlog} />
      </div>
    </div>
  );
}

export default App;

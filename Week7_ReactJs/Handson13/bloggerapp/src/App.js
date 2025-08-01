import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css'

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = [
  { id: 201, cname: 'React Fundamentals', price: 1200 },
  { id: 202, cname: 'Node.js Complete', price: 1500 },
];

const blogs = [
  { id: 301, title: 'React vs Angular', content: 'A detailed comparison of two popular frameworks.' },
  { id: 302, title: 'Getting Started with MongoDB', content: 'Learn how to setup and use MongoDB efficiently.' },
];

function App() {
  return (
    <div className="horizontal-layout">
      <div className="section">
        <BookDetails books={books} />
      </div>
      <div className="separator" />
      <div className="section">
        <CourseDetails courses={courses} />
      </div>
      <div className="separator" />
      <div className="section">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const BlogDetails = (props) => {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {props.blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;

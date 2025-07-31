import React from 'react';

const BlogDetails = ({ show }) => {
  return show ? (
    <div style={{ borderLeft: '3px solid green', paddingLeft: '30px' }}>
      <h2>Blog Details</h2>
      <h3>React Learning</h3>
      <p><strong>Stephen Biz</strong></p>
      <p>Welcome to learning React!</p>
      <h3>Installation</h3>
      <p><strong>Schwezdenier</strong></p>
      <p>You can install React from npm.</p>
    </div>
  ) : null;
};

export default BlogDetails;

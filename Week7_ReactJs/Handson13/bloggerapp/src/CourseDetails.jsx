import React from 'react';

const CourseDetails = (props) => {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {props.courses.map(course => (
          <li key={course.id}>
            <h3>{course.cname}</h3>
            <h4>₹{course.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;

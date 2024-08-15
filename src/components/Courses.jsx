import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseOverview from './CourseOverview';

const Courses = ({ handleAddToCart, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShowOverview = (course) => {
    setSelectedCourse(course);
  };

  return (
    <section>
      <h2>Available Courses</h2>
      <div className="course-container">
        {courses.length === 0 ? (
          <p>Loading courses...</p>
        ) : (
          courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onAddToCart={handleAddToCart}
              onShowOverview={handleShowOverview}
            />
          ))
        )}
        {selectedCourse && <CourseOverview course={selectedCourse} />}
      </div>
    </section>
  );
};

export default Courses;

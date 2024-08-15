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
      <h2 className='text-2xl font-bold mb-4'>Available Courses</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">{/* horizontally display the cards */}
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

//renders the list of components & parent of the courseCard.jsx
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseOverview from './CourseOverview';
// Define the `Courses` functional component.
const Courses = ({ handleAddToCart, courses }) => {
// State to manage the currently selected course for detailed view.
  const [selectedCourse, setSelectedCourse] = useState(null);
// Function to handle showing course details.
  // Sets the selected course to be displayed in the CourseOverview component.
  const handleShowOverview = (course) => {
    setSelectedCourse(course);
  };

  return (
    <section>
      {/* Heading for the courses section. Styled with Tailwind CSS classes. */}
      <h2 className='text-2xl font-bold mb-4'>Available Courses</h2>
      {/* Container to horizontally display CourseCard components.
          `flex` creates a flex container, `overflow-x-auto` allows horizontal scrolling if the content overflows.
          `space-x-4` adds horizontal spacing between cards, `pb-4` adds bottom padding.
      */}
      <div className="flex overflow-x-auto space-x-4 pb-4">{/* horizontally display the cards */}
        {/* Conditional rendering: If no courses are loaded, display a loading message. */}
        {courses.length === 0 ? (
          <p>Loading courses...</p>
        ) : (
          // Map through the `courses` array and render a `CourseCard` for each course.
          // Pass `course`, `handleAddToCart`, and `handleShowOverview` as props to each `CourseCard`.
          courses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onAddToCart={handleAddToCart}
              onShowOverview={handleShowOverview}
            />
          ))
        )}
      </div>
      {/* Conditional rendering: Display `CourseOverview` only if a course is selected. */}
      {selectedCourse && <CourseOverview course={selectedCourse} />}
    </section>
  );
};

export default Courses;

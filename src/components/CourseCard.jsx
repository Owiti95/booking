//renders information of individual course in a card
import React from "react";

// Define the `CourseCard` functional component, which takes `course`, `onAddToCart`, and `onShowOverview` as props.
const CourseCard = ({ course, onAddToCart, onShowOverview }) => (
    // Render a card for displaying individual course information.
    <div key={course.id}
    className="bg-orange-100 shadow-md rounded-lg overflow-hidden w-64 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-amber-300">
        {/* Image of the course */}
        <img
        src={course.imageUrl}
        className="w-64 h-48 object-cover mb-4 rounded-t-lg"
        />
        <h3 className='font-bold mb-2'>{course.course}</h3>
        <p className='mb-1'>Mode: {course.mode}</p>
        <p className='mb-1'>Price: Kshs{course.price}</p>
        <p className='mb-4'>Duration: {course.duration}</p>
        <div className="flex justify-between">
        {/* Add to Cart button */}
        <button
        onClick={() => onAddToCart(course)}
        className="px-1 py-1 bg-lime-700 text-white font-bold rounded hover:bg-lime-900 transition-colors duration-300"
        >
            Add to Cart
        </button>
        {/* Overview button */}
        <button
        onClick={() => onShowOverview(course)}
        className="px-1 py-1 bg-lime-700 text-white font-semibold rounded hover:bg-lime-900 transition-colors duration-300"
        >
            Overview
        </button>
        </div>
    </div>
);

export default CourseCard;
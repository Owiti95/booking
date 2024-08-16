import React from "react";

const CourseOverview = ({ course }) => (
    <div className="course-overview">
        {course.id === 1 && <p>Learn how to cultivate and harvest various spices, understand soil requirements, and explore market opportunities.</p>}
        {course.id === 2 && <p>Gain insights into poultry care, feeding practices, disease management, and commercial poultry farming.</p>}
        {course.id === 3 && <p>Understand the business side of agriculture, including market analysis, financial management, and supply chain logistics.</p>}
        {course.id === 4 && <p>Experience a guided tour of various farms to see different farming practices and technologies in action.</p>}
        {course.id === 5 && <p>Discover the techniques for growing and harvesting leafy greens, including soil preparation and pest control.</p>}
        {course.id === 6 && <p>Learn about the logistics of getting farm produce from the field to the market, including transportation and warehousing.</p>}
        {course.id === 7 && <p>Master the skills needed to efficiently manage a farm, including planning, resource allocation, and operational management.</p>}
    </div>
);

export default CourseOverview;
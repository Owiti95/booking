const CourseCard = ({ course, onAddToCart, onShowOverview }) => (
    <div key={course.id} className="course-card">
        <img src={course.imageUrl} />
        <h3>{course.course}</h3>
        <p>Mode: {course.mode}</p>
        <p>Price: ${course.price}</p>
        <p>Duration: {course.duration}</p>
        <button onClick={() => onAddToCart(course)}>Add to Cart</button>
        <button onClick={() => onShowOverview(course)}>overview</button>
    </div>
);
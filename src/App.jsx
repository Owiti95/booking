import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => (
  <section>
    <h2>Intro</h2>
    <p>
      In an era where agriculture is evolving rapidly, our Farming Courses program offers a comprehensive learning experience tailored for enthusiasts, students, and industry professionals. This program is designed to provide you with essential knowledge and practical skills across various aspects of modern farming.
      Previously, many of these specialized farming techniques were not easily accessible. In this course, you’ll start by exploring foundational concepts and setting up your learning environment. You’ll then delve into specific farming practices such as spices farming, poultry farming, and agribusiness. Each course includes detailed insights into the methods, tools, and best practices for successful farming. Finally, you'll gain hands-on experience through practical modules, ensuring you can apply what you've learned to real-world scenarios.
    </p>
    <Link to="/courses">
      <button>View Courses</button>
    </Link>
  </section>
);

const CourseOverview = ({ course }) => (
  <div className="course-overview">
    <h4>Course Overview</h4>
    {course.id === 1 && <p>Learn how to cultivate and harvest various spices, understand soil requirements, and explore market opportunities.</p>}
    {course.id === 2 && <p>Gain insights into poultry care, feeding practices, disease management, and commercial poultry farming.</p>}
    {course.id === 3 && <p>Understand the business side of agriculture, including market analysis, financial management, and supply chain logistics.</p>}
    {course.id === 4 && <p>Experience a guided tour of various farms to see different farming practices and technologies in action.</p>}
    {course.id === 5 && <p>Discover the techniques for growing and harvesting leafy greens, including soil preparation and pest control.</p>}
    {course.id === 6 && <p>Learn about the logistics of getting farm produce from the field to the market, including transportation and warehousing.</p>}
    {course.id === 7 && <p>Master the skills needed to efficiently manage a farm, including planning, resource allocation, and operational management.</p>}
  </div>
);

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
            <div key={course.id} className="course-card">
              <img src={course.imageUrl} alt={course.course} />
              <h3>{course.course}</h3>
              <p>Mode: {course.mode}</p>
              <p>Price: ${course.price}</p>
              <p>Duration: {course.duration}</p>
              <button onClick={() => handleAddToCart(course)}>Add to Cart</button>
              <button onClick={() => handleShowOverview(course)}>Show Overview</button>
              {selectedCourse && selectedCourse.id === course.id && <CourseOverview course={course} />}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const Cart = ({ cart, handleRemoveFromCart }) => (
  <section>
    <h2>Cart</h2>
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.course} />
            <p>{item.course} - ${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  </section>
);

const App = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('http://localhost:8000/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  useEffect(() => {
    // Fetch cart data from JSON Server
    fetch('http://localhost:8000/cart')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleAddToCart = (course) => {
    fetch('http://localhost:8000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course),
    })
    .then(response => response.json())
    .then(data => {
      setCart([...cart, data]);
    })
    .catch(error => console.error('Error adding to cart:', error));
  };

  const handleRemoveFromCart = (id) => {
    fetch(`http://localhost:8000/cart/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setCart(cart.filter(item => item.id !== id));
    })
    .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Farming Courses</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses handleAddToCart={handleAddToCart} courses={courses} />} />
            <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

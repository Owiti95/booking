import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  // State to store course data
  const [courses, setCourses] = useState([]);
  // State to store cart data
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('https://json-courses.vercel.app/courses')
      .then(response => response.json())// Convert response to JSON
      .then(data => setCourses(data))// Update state with fetched data
      .catch(error => console.error('Error fetching courses:', error));
  }, []);// Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Fetch cart data from JSON Server
    fetch('https://json-courses.vercel.app/cart')
      .then(response => response.json())// Convert response to JSON
      .then(data => setCart(data))// Update state with fetched data
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  // Function to add a course to the cart
  const handleAddToCart = (course) => {
    fetch('https://json-courses.vercel.app/cart', {
      method: 'POST', // add new item 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course),// Convert course object to JSON string
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => setCart([...cart, data]))// Update cart state with new item
    .catch(error => console.error('Error adding to cart:', error));
  };

  // Function to remove an item from the cart by its ID
  const handleRemoveFromCart = (id) => {
    fetch(`https://json-courses.vercel.app/cart/${id}`, {//send a delete request to the server
      method: 'DELETE',
    })
    .then(() => {
      setCart(cart.filter(item => item.id !== id)); // Update cart state to exclude removed item
    })
    .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <Router>
      <div className="app">
        {/* rendering navigation bar with cart count */}
        <NavBar cartCount={cart.length} />

        <main>
          {/* Defines routes for different components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses handleAddToCart={handleAddToCart} courses={courses} />} />
            <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />} />
          </Routes>
        </main>
        {/* Footer for the app*/}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

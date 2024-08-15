import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

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
    .then(data => setCart([...cart, data]))
    .catch(error => console.error('Error adding to cart:', error));
  };

  const handleRemoveFromCart = (id) => {
    fetch(`http://localhost:8000/cart/${id}`, {
      method: 'DELETE',
    })
    .then(() => setCart(cart.filter(item => item.id !== id)))
    .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <Router>
      <div className="app">
        <NavBar cartCount={cart.length} />

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

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('https://json-booking.vercel.app/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  useEffect(() => {
    // Fetch cart data from JSON Server
    fetch('https://json-booking.vercel.app/cart')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleAddToCart = (course) => {
    fetch('https://json-booking.vercel.app/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course),
    })
    .then(response => response.json())
    .then(data => setCart([...cart, data]))
    .catch(error => console.error('Error adding to cart:', error));
  };

  const handleRemoveFromCart = (id) => {
    fetch(`https://json-booking.vercel.app/${id}`, {
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
        <Footer />
      </div>
    </Router>
  );
};

export default App;

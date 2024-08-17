import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
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
    // Fetch data from local JSON server
    axios.get('https://js-ashy-mu.vercel.app/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Fetch cart data from local JSON server
    axios.get('https://js-ashy-mu.vercel.app/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  // Function to add a course to the cart
  const handleAddToCart = (course) => {
    axios.post('https://js-ashy-mu.vercel.app/cart', course, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => setCart([...cart, response.data]))
    .catch(error => console.error('Error adding to cart:', error));
  };

  // Function to remove an item from the cart by its ID
  const handleRemoveFromCart = (id) => {
    axios.delete(`https://js-ashy-mu.vercel.app/cart/${id}`)
      .then(() => {
        setCart(cart.filter(item => item.id !== id));
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

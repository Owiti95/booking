import React from 'react';
import { Link } from 'react-router-dom';
// Define the NavBar functional component that takes `cartCount` as a prop
const NavBar = ({cartCount}) => (
    // Create a header element for the navigation bar with background color, text color, padding, and flexbox layout
    <header className="bg-lime-900 text-white py-10 px-8 flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold ">Courses</h1>
        {/* Navigation links */}
        <nav className="space-x-4">
            <Link to="/" className= "px-6 py-3 hover:text-amber-500 transition-colors duration-300">Home</Link>
            <Link to="/courses" className="px-6 py-3 hover:text-amber-500 transition-colors duration-300">Courses</Link>
            <Link
            to="/cart"
            className="px-6 py-3 hover:text-amber-500 transition-colors duration-300"
            >
                cart <i className="fas fa-shopping-cart text-xl"></i>
                {cartCount > 0 && (
                <span className='ml-2 text-lg'>{cartCount}</span>
            )}
            </Link>
        </nav>
    </header>
);

export default NavBar;
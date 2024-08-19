import React from "react";
import { Link } from 'react-router-dom';
// Define the `Home` functional component using an arrow function.
// This component represents the homepage of the application.
const Home = () => (
    <div>
    <h5 className="text-2xl font-bold mb-4 items-center">About Us</h5>
        <p className="text-sm">
          We offer a variety of farming courses to help you enhance your skills and knowledge in modern agriculture.
        </p>
    <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-md rounded-lg max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-left mb-4 leading-loose">
        In an era where agriculture is evolving rapidly, our Farming Courses program offers a comprehensive learning experience tailored for enthusiasts, students, and industry professionals. This program is designed to provide you with essential knowledge and practical skills across various aspects of modern farming.
        Previously, many of these specialized farming techniques were not easily accessible. In this course, you’ll start by exploring foundational concepts and setting up your learning environment. You’ll then delve into specific farming practices such as spices farming, poultry farming, and agribusiness. Each course includes detailed insights into the methods, tools, and best practices for successful farming. Finally, you'll gain hands-on experience through practical modules, ensuring you can apply what you've learned to real-world scenarios.
        </p>
        <Link to="/courses">
        <button className="px-4 py-2 bg-lime-600 text-white font-bold rounded hover:bg-lime-900 transition-colors duration-300">View Courses</button>
        </Link>
        </div>
    </section>
    </div>
);

export default Home;
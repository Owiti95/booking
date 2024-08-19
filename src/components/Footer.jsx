import React from 'react'
// Define the `Footer` functional component.
function Footer() {
  return (
    <footer className="bg-lime-900 text-white py-6 px-4">
      {/* Container for centering content and applying responsive layout.*/}
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h5 className="text-lg font-bold mb-2">About Us</h5>
        <p className="text-sm">
          We offer a variety of farming courses to help you enhance your skills and knowledge in modern agriculture.
        </p>
      </div>
      {/*section for links.*/}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h5 className="text-lg font-bold mb-2">Quick Links</h5>
        <ul className="list-none">
          <li><a href="/" className="hover:text-amber-500 transition-colors duration-300">Home</a></li>
          <li><a href="/courses" className="hover:text-amber-500 transition-colors duration-300">Courses</a></li>
          <li><a href="/cart" className="hover:text-amber-500 transition-colors duration-300">Cart</a></li>
        </ul>
      </div>
      {/*section for links*/}
      <div className="text-center md:text-left">
        <h5 className="text-lg font-bold mb-2">Contact Us</h5>
        <p className="text-sm">77 Gachie, Kiambu</p>
        <p className="text-sm">Email: info@edufarmingcourses.com</p>
        <p className="text-sm">Phone: +254 795 ****06</p>
      </div>
    </div>
    {/*section for date function*/}
    <div className="text-center mt-6 border-t border-gray-100 pt-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} Farming Courses. All rights reserved.</p>{/* Displays the current year dynamically and includes a copyright notice */}
    </div>
  </footer>
  )
}

export default Footer
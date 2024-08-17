# Farming Courses Application

## Overview

The Farming Courses Application is a React-based web app that allows users to browse a variety of farming courses, add them to a cart, and view their selections. This app features a responsive design using Tailwind CSS and allows users to manage their cart with CRUD operations.

## Features

- **Browse Courses**: View available courses with details including price, duration, and mode of delivery.
- **Add to Cart**: Add courses to your cart and view cart contents.
- **Remove from Cart**: Remove courses from the cart.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Dynamic Data Handling**: Fetches and manages course and cart data using JSON Server.

## Technologies

- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For responsive and customizable styling.
- **JSON Server**: For simulating a backend with a mock database.
- **React Router**: For navigation between different views.

## Installation

## Summary of Instructions on how run this repo in your machine

- **Clone the repository**
- **Install dependencies**
- **Set up and run JSON Server**
- **Start the React application**

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Owiti95/farming-courses-app.git
    cd farming-courses-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start JSON Server**

    ```bash
    npm run server
    ```

    Make sure `json-server` is installed globally or install it using:

    ```bash
    npm install -g json-server
    ```

4. **Start the React Application**

    ```bash
    npm run dev
    ```

    This will start the Vite development server and open the app in your default web browser.

## File Structure

- **`src/`**: Contains all source code for the project.
  - **`components/`**: Contains React components.
    - **`CourseCard.jsx`**: Displays individual course information.
    - **`CourseOverview.jsx`**: Shows detailed information about a selected course.
    - **`CartItem.jsx`**: Displays individual cart items.
    - **`Cart.jsx`**: Manages and displays the cart contents.
    - **`Home.jsx`**: Landing page with information about the courses.
    - **`NavBar.jsx`**: Navigation bar for routing.
    - **`Footer.jsx`**: Footer section of the app.
  - **`App.jsx`**: Main application component handling routing and state.
  - **`index.js`**: Entry point for the React application.

## Usage

1. Navigate to the home page to learn about the farming courses offered.
2. Browse the courses and add them to your cart.
3. View and manage items in your cart.
4. Navigate between different sections using the navigation bar.

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Live Link

https://booking-two-sepia.vercel.app/
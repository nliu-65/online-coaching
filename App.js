// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Coach</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Welcome to Fitness Coach</h2>
          <p>Your journey to a healthier lifestyle starts here.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>We are dedicated to helping you achieve your fitness goals.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Personal Training</li>
            <li>Nutritional Guidance</li>
            <li>Group Classes</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: info@fitnesscoach.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Fitness Coach. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

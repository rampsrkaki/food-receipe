import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxE7ZI8Bo3AW2U0HkUle9RyM-hYT4xOMM1eA&s"
        alt="Delicious Food Banner"
        className="home-banner"
      />

      <h1>Welcome to Foodie!</h1>
      <p>Your one-stop destination for discovering delicious recipes from around the world.</p>

      <section>
        <h2>What You Can Do:</h2>
        <ul>
          <li>Search for meals by name</li>
          <li>Browse our full recipe collection</li>
          <li>Save your favorite recipes as orders</li>
          <li>Contact us for suggestions or feedback</li>
        </ul>
      </section>

      <nav className="home-actions">
        <Link to="/foods" className="home-button">Explore Recipes</Link>
        <Link to="/signin" className="home-button">Sign In</Link>
      </nav>
    </main>
  );
};

export default Home;

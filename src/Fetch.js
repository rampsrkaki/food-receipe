'use client';
import React, { useEffect, useState } from 'react';
import './Fetch.css';
import { useOrder } from './OrderContext'; 

const Fetch = () => {
  const [recData, setRecData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToOrders } = useOrder(); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setRecData(data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const filteredRecipes = recData.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fetch-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="fetch-search"
      />

      <h2>Recipes</h2>
      {loading ? (
        <p>Loading recipes...</p>
      ) : filteredRecipes.length > 0 ? (
        <div className="fetch-grid">
          {filteredRecipes.map((recipe) => (
            <div className="fetch-card" key={recipe.idMeal}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="fetch-image"
              />
              <h3 className="fetch-title">{recipe.strMeal}</h3>
              <button className="fetch-button" onClick={() => addToOrders(recipe)}>
                Add to Orders
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default Fetch;

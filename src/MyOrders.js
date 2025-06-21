
import React from 'react';
import { useOrder } from './OrderContext';
import './Fetch.css'; 

const MyOrders = () => {
  const { orders, removeFromOrders } = useOrder();

  return (
    <div className="order-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders added yet.</p>
      ) : (
        <ul className="order-list">
          {orders.map((item) => (
            <li key={item.idMeal} className="order-item">
              <img src={item.strMealThumb} alt={item.strMeal} className="order-thumb" />
              <span>{item.strMeal}</span>
              <button className="remove-button" onClick={() => removeFromOrders(item.idMeal)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;

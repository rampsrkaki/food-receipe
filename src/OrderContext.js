// src/OrderContext.js
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';       
import 'react-toastify/dist/ReactToastify.css';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addToOrders = (meal) => {
    setOrders((prevOrders) => {
      
      if (!prevOrders.find((item) => item.idMeal === meal.idMeal)) {
        toast.success('Order added successfully!');  
        return [...prevOrders, meal];
      }
      return prevOrders;
    });
  };

  const removeFromOrders = (mealId) => {
    setOrders((prevOrders) => prevOrders.filter((item) => item.idMeal !== mealId));
  };

  return (
    <OrderContext.Provider value={{ orders, addToOrders, removeFromOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);

// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import Home from './Home';
import SignIn from './SignIn';
import ContactUs from './ContactUs';
import Foods from './Foods';
import MyOrders from './MyOrders';
import { OrderProvider } from './OrderContext'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <OrderProvider> 
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/orders" element={<MyOrders />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </OrderProvider>
     
  );
}

export default App;

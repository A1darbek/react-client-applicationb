// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MakeOrderForm from './components/MakeOrderForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProductsList from './components/ProductsList';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/register">Register</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/products">Products</Link> |
                <Link to="/make-order">Make Order</Link>
            </nav>

            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/make-order" element={<MakeOrderForm />} />
                <Route path="/" element={<div>Welcome! Please register, login, view products, or make an order.</div>} />
            </Routes>
        </Router>
    );
}

export default App;

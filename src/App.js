import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
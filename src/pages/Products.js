import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating/Rating';
import './Products.css';

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="products-grid">
            {items.map(item => (
                <div key={item.id} className="product-card">
                    <img src={item.image} alt={item.title} />
                    <Link to={`/product/${item.id}`} className="product-title">
                        {item.title}
                    </Link>
                    <Rating value={item.rating.rate} />
                </div>
            ))}
        </div>
    );
};

export default Products;
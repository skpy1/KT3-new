import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating/Rating';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <button onClick={() => navigate(-1)}>Назад</button>
            <div className="detail-grid">
                <img src={item.image} alt={item.title} />
                <div className="info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Цена: ${item.price}</p>
                    <Rating value={item.rating.rate} />
                </div>
            </div>
        </div>
    );
};

export default Product;

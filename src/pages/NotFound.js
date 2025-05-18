import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notfound">
            <h1>404: Страница не найдена</h1>
            <button onClick={() => navigate('/products')}>Перейти к товарам</button>
        </div>
    );
};

export default NotFound;
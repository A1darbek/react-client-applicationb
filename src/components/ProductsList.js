import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/products';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts(token);
                console.log('Fetched products:', data); // Log the raw response data
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        };

        if (token) {
            fetchProducts();
        }
    }, [token]);


    if (!token) {
        return <p>You must be logged in to view products.</p>;
    }

    return (
        <div>
            <h2>Products</h2>
            {products.length === 0 && <p>No products available.</p>}
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <h3>{p.title}</h3>
                        <p>Description: {p.description}</p>
                        <p>Price: {p.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;

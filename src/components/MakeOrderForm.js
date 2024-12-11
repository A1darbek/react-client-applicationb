// src/components/MakeOrderForm.js
import React, { useState } from 'react';
import { makeOrder } from '../api/orders';

const MakeOrderForm = () => {
    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('authToken');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            setMessage('You must be logged in to place an order.');
            return;
        }

        const orderRequest = {
            userId: parseInt(userId, 10),
            productId: parseInt(productId, 10)
        };

        try {
            const responseMessage = await makeOrder(token, orderRequest);
            setMessage(responseMessage);
        } catch (error) {
            console.error(error);
            // If the server returned an error message, it might be in error.response.data
            const errorMsg = error.response && error.response.data
                ? error.response.data
                : 'Failed to place order.';
            setMessage(errorMsg);
        }
    };

    return (
        <div>
            <h2>Make an Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input
                        type="number"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product ID:</label>
                    <input
                        type="number"
                        value={productId}
                        onChange={e => setProductId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MakeOrderForm;

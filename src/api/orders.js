// src/api/orders.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/management'; // Adjust if needed

export const makeOrder = async (token, orderRequest) => {
    const response = await axios.post(`${API_BASE_URL}/make`, orderRequest, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
    return response.data; // "Order placed successfully!" or "Failed to place order."
};

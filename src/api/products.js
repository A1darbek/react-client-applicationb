import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/management'; // Adjust to your backend URL

export const getAllProducts = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/products`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data; // should be an array of products
};

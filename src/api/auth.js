import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/auth';

export const registerUser = async ({ username, login, password, role }) => {
    const response = await axios.post(`${API_BASE_URL}/register`, {
        username,
        login,
        password,
        role
    });
    return response.data;
};

export const authenticateUser = async ({ login, password }) => {
    const response = await axios.post(`${API_BASE_URL}/authenticate`, {
        login,
        password
    });
    return response.data;
};

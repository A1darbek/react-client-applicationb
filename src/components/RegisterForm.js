import React, { useState } from 'react';
import { registerUser } from '../api/auth';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('MANAGER'); // default, or make selectable
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser({ username, login, password, role });
            setMessage('User registered successfully. You can now login.');
        } catch (error) {
            console.error('Registration failed:', error); // Logs the entire error object
            if (error.response) {
                // The request was made and the server responded with a status code outside the range of 2xx
                console.error('Server responded with:', error.response);
                const errorMsg = error.response.data && error.response.data.message
                    ? error.response.data.message
                    : 'An unknown error occurred during registration.';
                setMessage(`Registration failed: ${errorMsg}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                setMessage('No response from the server. Please try again later.');
            } else {
                // Something else happened in setting up the request
                console.error('Error setting up request:', error.message);
                setMessage(`Registration failed: ${error.message}`);
            }
        }
    };


    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Login:</label>
                    <input
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={e => setRole(e.target.value)}>
                        <option value="MANAGER">MANAGER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterForm;

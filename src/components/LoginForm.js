import React, { useState } from 'react';
import { authenticateUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await authenticateUser({ login, password });
            console.log('data.access_token before storing:', data.access_token);
            localStorage.setItem('authToken', data.access_token);
            console.log('authToken from localStorage after storing:', localStorage.getItem('authToken'));
            navigate('/products');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginForm;

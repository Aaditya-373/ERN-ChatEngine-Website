import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

function LoginPage({ onAuth }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://ern-chat-engine-website-s-git-07f349-aadityas-projects-998f881a.vercel.app/authenticate', { username });
      onAuth(response.data);
    } catch (error) {
      setError('Login failed, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>CockChat εつ</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;

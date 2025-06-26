import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Login error");
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(to right, #1e3c72, #2a5298);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-page {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 400px;
          text-align: center;
          color: white;
        }

        .login-page h2 {
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .login-form input {
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .login-form input::placeholder {
          color: #ffffff99;
        }

        .login-form input:focus {
          border-color: #00b4db;
          box-shadow: 0 0 0 2px rgba(0, 180, 219, 0.3);
        }

        .login-form button {
          background: #00b4db;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.75rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .login-form button:hover {
          background: #0083b0;
          transform: translateY(-1px);
        }

        .login-form button:active {
          transform: scale(0.98);
        }
      `}</style>

      <div className="login-page">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;

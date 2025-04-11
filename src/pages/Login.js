import './Login.css'; // Add styles here or import from CSS
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger, FaIceCream } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      {/* Background Icons */}
      <FaPizzaSlice className="bg-icon pizza" />
      <FaHamburger className="bg-icon burger" />
      <FaIceCream className="bg-icon icecream" />

      <div className="login-box bg-white p-5 rounded shadow">
        <h2 className="text-center mb-4 fw-bold">Login to <span className="text-warning">TastyWay</span></h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">Login</button>
          <div className="text-center mt-3">
            <small>Don't have an account? <Link to="/signup" className="text-dark fw-semibold">Sign Up</Link></small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

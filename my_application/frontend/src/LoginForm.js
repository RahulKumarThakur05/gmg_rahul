import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log("Login successful");
      navigate("/profile", { state: { email } });
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="d-flex  justify-content-center align-items-center bg-success vh-100">

      <div className="bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center align-item-center">Login</h2>
        <form>
          <div className="mb-3">
            <label><strong>Email</strong></label>
            <input
            type="email"
            placeholder="Enter Your Email"
            className="form-control rounded-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label><strong>Password</strong></label>
            <input
            type="password"
            placeholder="Enter Your Password"
            className="form-control rounded-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        <button type="button" className="btn btn-success w-100 rounded-0" onClick={handleLogin}>
          Login
        </button>
        <div className="d-flex justify-content-center align-item-center">
            <span>Don't have an Account?</span>
            <Link to="/signup">Sign up</Link>
          </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;

// SignupForm.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [clgname, setClgname] = useState("");
  // const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
        name,
        age,
        dob,
        contact,
      });
      console.log("Signup successful");
      setEmail("");
      setPassword("");
      setName("");
      setAge("");
      setDob("");
      setContact("");
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div className="d-flex  justify-content-center align-items-center bg-success vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center align-item-center">Sign_up</h2>
        <form>
          <div className="mb-3">
            <label><strong> Full Name</strong></label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              id="validationCustom01" required  
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <label><strong>Age</strong></label>
            <input
              type="tel"
              placeholder="Enter Your Age"
              className="form-control rounded-0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label><strong>Date of Birth</strong></label>
            <input
              type="date"
              placeholder="Enter Your Date of Birth"
              className="form-control rounded-0"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label><strong>Contact</strong></label>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="form-control rounded-0"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label><strong>Password</strong></label>
            <input
              type="password"
              className="form-control rounded-0"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="button" className="btn btn-success w-100 rounded-0" onClick={handleSignup}>
              Signup
            </button>
          </div>
          <div className="d-flex justify-content-center align-item-center">
            <span>If already signed up?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

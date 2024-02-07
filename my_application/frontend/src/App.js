// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfilePage from "./ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<SignupForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;

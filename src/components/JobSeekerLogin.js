import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobSeekerLogin } from "../services/api";

function JobSeekerLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await jobSeekerLogin(formData);

      alert(result.message);

      // Save user data
      localStorage.setItem(
        "jobSeeker",
        JSON.stringify(result.data)
      );

      // Navigate to Home Page
      navigate("/jobseeker/home");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div>
      <h2>Job Seeker Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}

export default JobSeekerLogin;
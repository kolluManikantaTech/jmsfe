import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobSeekerHome() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState("");

  const user = JSON.parse(
    localStorage.getItem("jobSeeker")
  );

  const handleSearch = () => {
    if (!skill.trim()) {
      alert("Enter Skill");
      return;
    }

    navigate(`/jobs?skill=${skill}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("jobSeeker");
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <h3>Search For a Job</h3>
      <input
        type="text"
        placeholder="React"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        onClick={handleSearch}
        style={{ marginLeft: "10px" }}
      >
        Search
      </button>

      <button
        onClick={() => navigate("/myapplications")}
        style={{ marginLeft: "15px" }}
      >
        My Applications
      </button>

      <button
        onClick={handleLogout}
        style={{ marginLeft: "15px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default JobSeekerHome;
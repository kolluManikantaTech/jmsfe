import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchJobs, applyJob } from "../services/api";

function JobsList() {
  const [jobs, setJobs] = useState([]);

  const [searchParams] = useSearchParams();

  const skill = searchParams.get("skill");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const result = await searchJobs(skill);
      setJobs(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApply = async (jobId) => {
    try {
      const seeker = JSON.parse(
        localStorage.getItem("jobSeeker")
      );

      const payload = {
        seekerId: seeker._id,
        jobId: jobId,
      };

      const result = await applyJob(payload);

      alert(result.message);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Application Failed"
      );
    }
  };

  return (
    <div>
      <h2>Available Jobs</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Apply</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.companyName}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.experience}</td>
              <td>{job.skills.join(", ")}</td>

              <td>
                <button onClick={() => handleApply(job._id)}> Apply </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobsList;
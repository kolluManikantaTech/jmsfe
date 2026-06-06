import React, { useEffect, useState } from "react";
import { getMyApplications } from "../services/api";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const seeker = JSON.parse(
        localStorage.getItem("jobSeeker")
      );

      const result = await getMyApplications(
        seeker._id
      );

      setApplications(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>My Applications</h2>
        {applications.length === 0 ? (
      <h3>No Applications Found</h3>
    ) : (
      <table border="1">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Applied Date</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.job.title}</td>
              <td>{app.job.companyName}</td>
              <td>{app.job.location}</td>
              <td>{app.job.salary}</td>
              <td>{app.job.experience}</td>
              <td>
                {new Date(
                  app.createdAt
                ).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
}

export default MyApplications;
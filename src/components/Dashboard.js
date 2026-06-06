import {Link , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard(){
const [jobs, setJobs] = useState([]);
const navigate = useNavigate();
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/jobs"
            );

            console.log(response.data);

            setJobs(response.data.jobs || response.data.data || []);

        } catch (error) {

            console.log(error);

        }
    };
     // DELETE FUNCTION
    const deleteJob = async (id) => {
     // show confirm box
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

        try {

            await axios.delete(
                `http://localhost:5000/api/jobs/${id}`
            );

            alert("Job Deleted Successfully");

            fetchJobs();

        } catch (error) {

            console.log(error);

        }
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("recruiterName");
        alert("Logged out successfully");
        navigate("/login");
    };
return(

<div className="dashboard-container">
<div className="top-bar">
<h2>Dashboard</h2>
<button className="logout-btn" onClick={handleLogout}>Logout</button>
</div>
<Link to="/create-job">Create Job</Link>
<table border="2">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>COMPANY NAME</th>
                        <th>LOCATION</th>
                        <th>SALARY</th>
                        <th>JOB TYPE</th>
                        <th>EXPERIENCE</th>
                        <th>DESCRIPTION</th>
                        <th>SKILLS</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        jobs.map((job)=>(
                            <tr>
                                <td>{job.title}</td>
                                <td>{job.companyName}</td>
                                <td>{job.location}</td>
                                <td>{job.salary}</td>
                                <td>{job.jobType}</td>
                                <td>{job.experience}</td>
                                <td>{job.description}</td>
                                <td>{job.skills?.join(",")}</td>
                                <td>
                                    <Link to={`/edit-job/${job._id}`}>
                                    UPDATE
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => deleteJob(job._id)}> Delete </button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
</div>
)}

export default Dashboard;
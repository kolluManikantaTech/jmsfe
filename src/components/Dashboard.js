import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard(){
const [jobs, setJobs] = useState([]);

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
return(

<div className="dashboard-container">
<h2>Dashboard</h2>
<Link to="/create-job">Create Job</Link>
<Link to="/editJob">Update Job</Link>
<Link to="/delete">Delete Job</Link>
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
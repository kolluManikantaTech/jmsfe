import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateJob() {

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "",
        experience: "",
        description: ""
    });

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/jobs", job);

            alert("Job Created Successfully");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Failed to Create Job");

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                name="title"
                placeholder="Job Title"
                onChange={handleChange}
            />

            <input
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
            />

            <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
            />

            <input
                name="salary"
                placeholder="Salary"
                onChange={handleChange}
            />

            <input
                name="jobType"
                placeholder="Job Type"
                onChange={handleChange}
            />

            <input
                name="experience"
                placeholder="Experience"
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="Description"
                onChange={handleChange}
            />
            <input name="skills" placeholder="skills" onChange={handleChange}></input>
            <button type="submit">
                Create Job
            </button>

        </form>

    );
}

export default CreateJob;
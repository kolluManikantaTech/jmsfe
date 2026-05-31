import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditJob() {

    const { id } = useParams();
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

    useEffect(() => {
        loadJob();
    }, []);

    const loadJob = async () => {

    try {

        const response = await API.get(`/jobs/${id}`);

        console.log(response.data);

        setJob(
            response.data.data || response.data
        );

    } catch(error) {

        console.log(error);

    }
};

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const updateJob = async (e) => {

        e.preventDefault();

        try {

            await API.put(`/jobs/${id}`, job);

            alert("Job Updated Successfully");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);
            alert("Failed to Update Job");

        }
    };

    return (

        <form onSubmit={updateJob}>

            <h2>Edit Job</h2>

            <input
                name="title"
                placeholder="Job Title"
                value={job.title}
                onChange={handleChange}
            />

            <input
                name="companyName"
                placeholder="Company Name"
                value={job.companyName}
                onChange={handleChange}
            />

            <input
                name="location"
                placeholder="Location"
                value={job.location}
                onChange={handleChange}
            />

            <input
                name="salary"
                placeholder="Salary"
                value={job.salary}
                onChange={handleChange}
            />

            <input
                name="jobType"
                placeholder="Job Type"
                value={job.jobType}
                onChange={handleChange}
            />

            <input
                name="experience"
                placeholder="Experience"
                value={job.experience}
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="Description"
                value={job.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="skills"
                value={job.skills?.join(",") || ""}
                onChange={(e) =>setJob({...job,skills: e.target.value.split(",")
        })
    }
/>

            <button type="submit">
                Update Job
            </button>

        </form>

    );
}

export default EditJob;
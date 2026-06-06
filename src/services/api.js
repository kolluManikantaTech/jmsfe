import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

API.interceptors.request.use((req)=>{

    const token = localStorage.getItem("token");

    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});
// Job Seeker Register
export const jobSeekerRegister = async (userData) => {
    const response = await API.post(
    "/seeker/auth/register",
    userData
);

    return response.data;
};
export const jobSeekerLogin = async (loginData) => {
    const response = await API.post(
    "/seeker/auth/login",
    loginData
    );

    return response.data;
};
// Search Jobs by Skill
export const searchJobs = async (skill) => {
    const response = await API.get(
    `/seeker/jobs/search?skill=${skill}`
    );

    return response.data;
};
export const applyJob = async (applicationData) => {
    const response = await API.post(
    "/seeker/applications/apply",
    applicationData
    );

    return response.data;
};
export const getMyApplications = async (seekerId) => {
    const response = await API.get(
    `/seeker/applications/my-applications?seekerId=${seekerId}`
    );

    return response.data;
};

export default API;
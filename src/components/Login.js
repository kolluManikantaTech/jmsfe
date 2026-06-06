import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //read recruiter name from localStorage
    const recruiterName = localStorage.getItem("recruiterName");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password
                }
            );

            if (response.data.success) {

    localStorage.setItem(
        "token",
        response.data.data.token
    );
    localStorage.setItem("recruiterName", response.data.data.name);

    alert(`Welcome ${response.data.data.name}! Login Successful`);

    navigate("/dashboard");

} else {

    alert("Invalid Email or Password");

}}

catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Login Failed"
            );

        }
    };

    return (
    <div className="login-container">

        <h2>Login Page</h2>

        <div className="top-links">
            <Link to="/jobseeker/register">
                Job Seeker Register
            </Link>

            <Link to="/jobseeker/login">
                Job Seeker Login
            </Link>
        </div>

        <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <label>Password</label>

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <p>
                Are you a new recruiter?
                {" "}
                <Link to="/register">
                    Register here
                </Link>
            </p>

            <br /><br />

            <button type="submit">
                Login
            </button>

        </form>

    </div>
);
}

export default Login;
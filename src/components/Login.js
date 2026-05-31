import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

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

    alert("Login Successful");

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

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;
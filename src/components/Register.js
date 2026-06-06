import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";

function Register(){

const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    company:""
});

const navigate=useNavigate();

const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=async(e)=>{

    e.preventDefault();

    try{

        await API.post("/auth/register", form);

        alert("Registration Success");

        navigate("/login");

    }
    catch(error){

        alert(error.response.data.message);

    }
};

return(

<div>

<h2>Register Recruiter</h2><br/>

<center><form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/><br/><br/>

<input name="email" placeholder="Email" onChange={handleChange}/><br/><br/>

<input name="password" placeholder="Password" onChange={handleChange}/><br/><br/>

<input name="phone" placeholder="Phone" onChange={handleChange}/><br/><br/>

<input name="company" placeholder="Company" onChange={handleChange}/><br/><br/>

<button>Register</button>

</form>
</center>

</div>

);

}

export default Register;
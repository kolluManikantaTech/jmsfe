import JobSeekerRegister from "./components/JobSeekerRegister";
import JobSeekerLogin from "./components/JobSeekerLogin";
import JobSeekerHome from "./components/JobSeekerHome";
import JobList from "./components/JobsList";
import MyApplications from "./components/MyApplications";
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Login from './components/Login'
import CreateJob from './components/CreateJob'
import EditJob from './components/EditJob'
function App() {
  return (
  //3.Presentation Logic Via Jsx
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/jobseeker/register" element={<JobSeekerRegister />}/>
    <Route path="/jobseeker/login" element={<JobSeekerLogin />}/>
    <Route path="/jobseeker/home" element={<JobSeekerHome />}/>
    <Route path="/jobs" element={<JobList/>}/>
    <Route path="/myapplications" element={<MyApplications/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/create-job" element={<CreateJob />} />
    <Route path="/edit-job/:id" element={<EditJob />} />
</Routes>
</BrowserRouter>
  );
}

export default App;

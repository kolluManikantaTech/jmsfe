import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
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
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/create-job" element={<CreateJob />} />
    <Route path="/edit-job/:id" element={<EditJob />} />
</Routes>
</BrowserRouter>
  );
}

export default App;

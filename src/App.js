import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {useState} from "react"
import {useContext , createContext} from "react"
import axios from "axios"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import ShowJobs from "./components/ShowJobs"
export const ResponseContext = createContext();
function App() {
  //1.Data/State of The Component "using useState Hook"
  let [data,setData] = useState([])
  //2.Writing Methods (Business Logic) via JavaScript 
  //Getting Api Responce by Using "useEffect Hook"
  useEffect(()=>{
  axios.get("http://localhost:5000/api/jobs")
  .then((response)=>setData(response.data.data))
  .catch((error)=>{
    console.log(error)
  })
  },[])
  return (
    //3.Presentation Logic Via Jsx
    <>
      <ResponseContext.Provider value={data}>
        <BrowserRouter>
        <div class="container">
        <Link to="/jobs">Jobs</Link>
        </div>
        <Routes>
          <Route path="/jobs" element={<ShowJobs/>}></Route>
        </Routes>
        </BrowserRouter>
      </ResponseContext.Provider>
    </>
  );
}

export default App;

import {useContext} from "react"
import { ResponseContext } from "../App"

export default function ShowJobs(){
    //1.get Api Response from App component to Child component Using "useContext"
    const jobs = useContext(ResponseContext)
    return(
        <div>
            <h1>View All Jobs</h1>
            <table border="2px">
                <thead>
                    <tr>
                        <td>TITLE</td>
                        <td>COMPANYNAME</td>
                        <td>LOCATION</td>
                        <td>SALARY</td>
                        <td>JOBTYPE</td>
                        <td>EXPERIENCE</td>
                        <td>DESCRIPTION</td>
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
                                <td>{job.Experience}</td>
                                <td>{job.description}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
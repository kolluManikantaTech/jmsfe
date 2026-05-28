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
                        <th>TITLE</th>
                        <th>COMPANYNAME</th>
                        <th>LOCATION</th>
                        <th>SALARY</th>
                        <th>JOBTYPE</th>
                        <th>EXPERIENCE</th>
                        <th>DESCRIPTION</th>
                        <th>SKILLS</th>

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
                                <td>{job.experience}</td>
                                <td>{job.description}</td>
                                <td>{job.skills[0]},{job.skills[1]},{job.skills[2]}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
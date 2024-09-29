import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import FormStudent from './FormStudent';
import FormCompany from './FormCompany';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import axios from 'axios';

export default function Profile() {
    const [user, setUser] = useState("");
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate("");

    const getAppliedJobs = useCallback(async () => { //prevent the function from being recreated every time the component re-renders
      if(!user.id) return
      
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/student/${user.id}/jobs`)

        if(response.status === 200) {
          setJobs(response.data)
        }
      } catch (error) {
        console.error("Error displaying jobs", error)
      }
    }, [user.id])

    useEffect(() => {
        const studentLogged = localStorage.getItem("studentLogged")
        const companyLogged = localStorage.getItem("companyLogged")

        if(studentLogged) {
            const studentData = JSON.parse(studentLogged)
            setUser(studentData)
            getAppliedJobs()
        }
        if(companyLogged) {
            const companyData = JSON.parse(companyLogged)
            setUser(companyData)
        }
    }, [getAppliedJobs])


  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
            {
              user.firstName ?
              <>
                  <h1>Olá, {user.firstName + " " + user.lastName + "!"}</h1>
                  <FormStudent user={user} />

                  <h2>Vagas que você se candidatou</h2>
                  <div className='row row-3'>
                    {jobs.map(job => ( 
                      <div key={job.id} className='card p-2 m-3'>
                        <label>{job.title}</label>
                        <label>{job.company.name}</label>
                        <label>{job.modality}</label>
                        <label>{job.location}</label>
                        <a onClick={() => navigate(`/area/${String(job.area).toLowerCase()}/${job.id}`)} className="btn btn-primary">Visualizar vaga</a>
                      </div>
                    ))}
                  </div>
              </>
              : 
              <>
                  <h1>Olá, {user.name + "!"}</h1>
                  <button className="btn btn-primary" onClick={() => {navigate("/addJob")}}>Ofertar uma vaga</button>
                  <FormCompany user={user} />
              </>
            }
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import FormStudent from './FormStudent';
import FormCompany from './FormCompany';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Pencil, Trash2, Building2 } from 'lucide-react';
import axios from 'axios';
import { SquarePlus } from 'lucide-react';
import './Profile.css'

export default function Profile() {
    const [user, setUser] = useState("");
    const [jobs, setJobs] = useState([]);
    const [publishedJobs, setPublishedJobs] = useState([]);
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

    const getPublishedJobs = useCallback(async () => {
      if(!user.id) return
      
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/company/${user.id}`)

        if(response.status === 200) {
          const data = response.data
          setPublishedJobs(data.jobs)
        }
      } catch(error) {
        alert("Undefined Error!")
        console.log("Error: ", error)
      }
    }, [user.id])

    const removeJob = async (jobId) => {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/company/${user.id}/job/${jobId}`)

        if(response.status === 204) {
          alert("Vaga excluída com sucesso!")
          //filter creates an array with every jobs, except the one that is equal to jobId
          setPublishedJobs(previousJobs => previousJobs.filter(job => ( 
            job.id !== jobId
          ))
        )
        }
      } catch(error) {
        console.log(publishedJobs)
        alert("Erro indefinido")
        console.log("Error: ", error)
      }
    }

    useEffect(() => {
        const studentLogged = localStorage.getItem("studentLogged")
        const companyLogged = localStorage.getItem("companyLogged")

        if(studentLogged) {
            const studentData = JSON.parse(studentLogged)
            setUser(studentData)
            getAppliedJobs()
        }
        else if(companyLogged) {
            const companyData = JSON.parse(companyLogged)
            setUser(companyData)
            getPublishedJobs()
        }
    }, [getAppliedJobs, getPublishedJobs])



  return (
    <div className='profileContent'>
      <Navbar />

      <div className='container'>
        <div className='row'>
            {
              user.firstName ?
              <>
                  <h1>Olá, {user.firstName + " " + user.lastName + "!"}</h1>
                  <FormStudent user={user} />
            
                  <h3>Vagas que você se candidatou</h3>
                  <div className='row row-3 justify-content-center'>
                    {jobs.map(job => ( 
                      <div key={job.id} className='cardJob p-2 m-3'>
                        <label className='jobTitle'>{job.title}</label>
                        <label className='jobComanyName'>{job.company.name} <Building2 /></label>
                        <button onClick={() => navigate(`/area/${String(job.area).toLowerCase()}/${job.id}`)} class="btn btn-primary">Visualizar vaga</button>  
                      </div>
                    ))}
                  </div>
              </>
              : 
              <>
                <h1>Olá, {user.name + "!"}</h1>
                <button className="companyBtn btn btn-primary" onClick={() => {navigate("/publishJob")}}>Ofertar uma vaga <label className='addJobIcon'><SquarePlus color="white" size={28} /></label></button>
                <FormCompany user={user} />
          
                <h3>Vagas publicadas</h3>
                  {publishedJobs.map(job => {
                    return (
                      <div key={job.id} className='card cardJob p-2 m-3'>
                        <div className='d-flex'>
                          <label className='editJobIcon' onClick={() => navigate(`/editJob/${job.id}`)} ><Pencil className="editIcon" /></label>
                          <label className='deleteJobIcon' onClick={() => removeJob(job.id)} ><Trash2 className="deleteIcon" /></label>
                        </div>
                        <label className='jobTitle'>{job.title}</label>
                        <a onClick={() => navigate(`/publishedJob/${job.id}`)} className="companyBtn btn btn-primary">Visualizar candidaturas</a>
                      </div>
                    )
                  })} 
              </>
            }
        </div>
      </div>
    </div>
  )
}

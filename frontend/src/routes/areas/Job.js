import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Job() {
  const { areaName, id } = useParams(); //extract
  const [job, setJob] = useState(null);

  const loadJob = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/job/${id}`)
  
      if(response.status === 200) {
        const jobData = response.data
        console.log(jobData)
        setJob(jobData)
      }
    }
    catch(error) {
      console.log("Error loading job: ", error)
    }
  }

  useEffect(() => {
    loadJob() 
  }, [])

  if (!job) {
    return (<p>Loading...</p>) 
  }

  const applyToJob = async () => {
    try {
      const studentLogged = JSON.parse(localStorage.getItem("studentLogged"))
      const companyLogged = JSON.parse(localStorage.getItem("companyLogged"))

      if(companyLogged) {
        alert("Empresas não podem se candidatar à vagas!")
        return;
      }

      const response = await axios.post(`http://localhost:8080/api/v1/student/${studentLogged.id}/apply/${id}`)

      if(response.status === 201) {
        alert("Candidatura realizada com sucesso!")
      }
      else {
        alert("Erro ao candidatar na vaga!")
        console.log("Applying status error: ", response.status)
      }
    }
    catch(error) {
      if(error.response) {
        if(error.response.status === 409) {
          alert("Você já é um candidato à esta vaga.")
        }
        else {
          alert("Erro ao candidatar na vaga!");
          console.log("Applying status error: ", error.response.status);
        }
      }
      else {
        console.log("Error applying to job: ", error)
      }
    }
  }

  return (
    <div>
      <Navbar areaName={areaName} />

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <h1>{job.title}</h1>  
            <p>{job.description}</p>
            <label>{job.modality}</label>
            <label>{job.location}</label>
          </div>
          <div className='col company-infos'>
            <h3>{job.company.name}</h3>
            <label>{job.company.releaseYear}</label>
            <label>{job.company.hqLocation}</label>
          </div>
        </div>
        <a className="btn btn-primary" onClick={applyToJob}>Candidatar-se</a>
      </div>
    </div>
  )
}

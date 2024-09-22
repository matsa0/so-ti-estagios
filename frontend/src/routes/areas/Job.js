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
    console.log(job)
  }, [])

  if (!job) {
    return (<p>Loading...</p>) 
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
        <a class="btn btn-primary">Candidatar-se</a>
      </div>
    </div>
  )
}

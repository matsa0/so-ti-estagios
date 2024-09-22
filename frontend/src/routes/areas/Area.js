import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import Card from './Card';
import axios from 'axios';
import { Car } from 'lucide-react';

export default function Area() {
  const { areaName } = useParams(); //extract
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    listJobsByArea()
  }, [])

  const validateAreaName = (areaName) => {
    if(areaName === "software_development") {
      return "Desenvolvimento de Software";
    }
    if(areaName === "data_science") {
      return "Ciência de Dados";
    }
    if(areaName === "artificial_intelligence") {
      return "Inteligência Artificial";
    }
    if(areaName === "cibersecurity") {
      return "Segurança Cibernética";
    }
    if(areaName === "devops") {
      return "DevOps";
    }
    if(areaName === "uxui") {
      return "UX/UI";
    }

    return null;
  }

  const listJobsByArea = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/job/area/${areaName}`)

      if(response.status === 200) {
        const jobsByArea = response.data
        setJobs(jobsByArea)
      }
    }
    catch(error) {
      console.log("Error finding jobs: ", error)
    }
  }

  return (
    <div>
        <Navbar areaName={validateAreaName(areaName)} />

        <div class="container">
            <div class="row row-cols-2">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <Card key={job.id} job={job}/>
                ))
              ) : (
                <h2>Não foram encontradas vagas para esta área</h2>
              )}
            </div>
        </div>
    </div>
  )
}

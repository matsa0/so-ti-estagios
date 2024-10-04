import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Areas.css'
import { Building2 } from 'lucide-react';

const Card = ({ job }) => {
    const navigate = useNavigate("")

    const handleCardClick = (areaName) => {
        navigate(`/area/${areaName}/${job.id}`)
    }
    const areaName = String(job.area).toLowerCase()

  return (
    <div>
        <div className='cardJob'>
            <label className='jobTitle'>{job.title}</label>
            <label className='jobComanyName'>{job.company.name} <Building2 /></label>
            <button onClick={() => handleCardClick(areaName)} class="btn btn-primary">Visualizar vaga</button>  
        </div>
    </div>
  )
}

export default Card;


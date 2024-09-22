import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ job }) => {
    const navigate = useNavigate("")

    const handleCardClick = (areaName) => {
        navigate(`/area/${areaName}/${job.id}`)
    }
    const areaName = String(job.area).toLowerCase()

  return (
    <div>
        <div className='card p-2 m-3'>
            <label>{job.title}</label>
            <label>{job.company.name}</label>
            <label>{job.modality}</label>
            <label>{job.location}</label>
            <a onClick={() => handleCardClick(areaName)} class="btn btn-primary">Visualizar vaga</a>
        </div>
    </div>
  )
}

export default Card;


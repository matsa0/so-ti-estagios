import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ job }) => {
    const navigate = useNavigate("")

    const handleCardClick = (areaName) => {
        navigate(`/area/${areaName}/${job.id}`)
    }

  return (
    <div>
        <div className='card p-2 m-3' style={{width: '20 rem'}}>
            <label >{job.name}</label>
            <label></label>
            <a onClick={() => handleCardClick(handleClick)} class="btn btn-primary">Visualizar vaga</a>
        </div>
    </div>
  )
}

export default Card;


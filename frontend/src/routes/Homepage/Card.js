import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ name, handleClick }) => {
    const navigate = useNavigate("")

    const handleCardClick = (areaName) => {
        navigate(`/area/${areaName}`)
    }

  return (
    <div>
        <div className='cardArea'>
            <label >{name}</label>
            <button onClick={() => handleCardClick(handleClick)} class="btn btn-primary">Visualizar vagas</button>
        </div>
    </div>
  )
}

export default Card;


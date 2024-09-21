import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ name, handleClick }) => {
    const navigate = useNavigate("")

    const handleCardClick = (areaName) => {
        navigate(`/area/${areaName}`)
    }

  return (
    <div>
        <div onClick={() => handleCardClick(handleClick)} className='card p-2 m-3' style={{width: '18 rem'}}>
            <label >{name}</label>
            <a href="#" class="btn btn-primary">Visualizar vagas</a>
        </div>
    </div>
  )
}

export default Card;


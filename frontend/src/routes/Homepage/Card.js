import React from 'react'

const Card = ({ name }) => {
  return (
    <div>
        <div className='card p-2 m-3' style={{width: '18 rem'}}>
            <label >{name}</label>
            <a href="#" class="btn btn-primary">Visualizar vagas</a>
        </div>
    </div>
  )
}

export default Card;


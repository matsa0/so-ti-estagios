import React from 'react'
import './Footer.css'

import gitHubIcon from './img/github.png'

export default function Footer() {
  return (
    <div className='footer'>
      <p>Desenvolvido por Matheus Azevedo 
        <img src={gitHubIcon} alt='Ícone do GitHub' />
      </p>
    </div>
  )
}

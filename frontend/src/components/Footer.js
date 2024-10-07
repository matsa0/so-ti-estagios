import React from 'react'
import './Footer.css'

import gitHubIcon from './img/github.png'

export default function Footer() {
  return (
    <div className='footer'>
      <p>Desenvolvido por Matheus Azevedo 
        <a href='https://github.com/matsa0/so-ti-estagios' target='blank'>
        <img src={gitHubIcon} alt='Ícone do GitHub' />
        </a>
      </p>
    </div>
  )
}

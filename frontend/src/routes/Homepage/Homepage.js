import React from 'react'

import Navbar from './Navbar'
import Card from './Card'

export default function Homepage() {



  return (
    <div>
        <Navbar />
        <div class="container">
            <h2>CONHEÇA ALGUMAS ÁREAS DISPONÍVEIS</h2>
            <div class="row row-cols-3">
                <Card handleClick={"softwareDevelopment"} name={"Desenvolvimento de Software"} />
                <Card handleClick={"dataScience"} name={"Ciência de Dados"} />
                <Card handleClick={"artificialIntelligence"} name={"Inteligência Artificial"} />
                <Card handleClick={"cibersecurity"} name={"Cibersegurança"} />
                <Card handleClick={"devops"} name={"DevOps"} />
                <Card handleClick={"uxui"} name={"UX/UI"} />
            </div>
        </div>
    </div>
  )
}

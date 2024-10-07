import React from 'react'

import Navbar from './Navbar'
import Card from './Card'
import './Homepage.css'
import Footer from '../../components/Footer'

export default function Homepage() {
  return (
    <div>
        <Navbar />
        <div class="homepageContent container">
            <h2>CONHEÇA ALGUMAS ÁREAS DISPONÍVEIS</h2>
            <div class="homepageCards row row-cols-3">
                <Card handleClick={"software_development"} name={"Desenvolvimento de Software"} />
                <Card handleClick={"data_science"} name={"Ciência de Dados"} />
                <Card handleClick={"artificial_intelligence"} name={"Inteligência Artificial"} />
                <Card handleClick={"cibersecurity"} name={"Cibersegurança"} />
                <Card handleClick={"devops"} name={"DevOps"} />
                <Card handleClick={"uxui"} name={"UX/UI"} />
            </div>
        </div>
    </div>
  )
}

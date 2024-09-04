import React from 'react'

import Navbar from './Navbar'
import Card from './Card'

export default function Homepage() {
  return (
    <div>
        <Navbar />
        <div class="container text-center">
            <div class="row row-cols-3">
                <Card name={"Engenharia de Software"} />
                <Card name={"Ciência de Dados"} />
                <Card name={"Inteligência Artificial"} />
                <Card name={"Cibersegurança"} />
                <Card name={"DevOps"} />
                <Card name={"UX/UI"} />
            </div>
        </div>
    </div>
  )
}

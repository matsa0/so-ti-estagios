import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

export default function Area() {
  const { areaName } = useParams(); //extract

  const validateAreaName = (areaName) => {
    if(areaName === "softwareDevelopment") {
      return "Desenvolvimento de Software";
    }
    if(areaName === "dataScience") {
      return "Ciência de Dados";
    }
    if(areaName === "artificialIntelligence") {
      return "Inteligência Artificial";
    }
    if(areaName === "cibersecurity") {
      return "Segurança Cibernética";
    }
    if(areaName === "cibersecurity") {
      return "Segurança Cibernética";
    }
    if(areaName === "devops") {
      return "DevOps";
    }
    if(areaName === "uxui") {
      return "UX/UI";
    }

    return null;
  }

  return (
    <div>
        <Navbar areaName={validateAreaName(areaName)} />

        
    </div>
  )
}

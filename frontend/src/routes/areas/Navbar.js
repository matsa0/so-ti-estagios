import React from 'react'
import { LogOut, User, ArrowLeftCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { SearchCode } from 'lucide-react'
import './Areas.css'

export default function Navbar({ areaName }) {
    const navigate = useNavigate("");
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const studentAlreadyLogged = localStorage.getItem("studentLogged")
        const companyAlreadyLogged = localStorage.getItem("companyLogged")

        setUserName(getUserNameLogged(studentAlreadyLogged, companyAlreadyLogged))
    }, [])

    const validateAreaName = () => {
        if(areaName === "software_development") {
          return "Desenvolvimento de Software";
        }
        if(areaName === "data_science") {
          return "Ciência de Dados";
        }
        if(areaName === "artificial_intelligence") {
          return "Inteligência Artificial";
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
    }

    function logOut() {
        const studentAlreadyLogged = localStorage.getItem("studentLogged")
        const companyAlreadyLogged = localStorage.getItem("companyLogged")

        if(studentAlreadyLogged) {
            localStorage.removeItem("studentLogged")
            navigate("/")
        }
        if(companyAlreadyLogged) {
            localStorage.removeItem("companyLogged")
            navigate("/loginCompany")
        }
    }

    function getUserNameLogged(student, company) {
        if(student) {
            const studentJson = JSON.parse(student)
            const studentLogged = studentJson.firstName + " " + studentJson.lastName

            return studentLogged;
        }
        if(company) {
            const companyJson = JSON.parse(company)
            const companyLogged = companyJson.name

            return companyLogged;
        }

        return null;
    }

  return (
    <div>
        <nav class="areaNavbar navbar bg-body-tertiary">
            <div class="container-fluid">
                <div className='logoNavbar d-flex' onClick={() => navigate("/homepage")}>
                    <a className="navbar-brand">SÓ TI ESTÁGIOS</a>
                    <label><SearchCode size={30} /></label>
                </div>
                <div class="areaName d-flex justify-content-center">
                    <a style={{cursor: 'pointer'}} 
                    onClick={() => navigate("/homepage")}><ArrowLeftCircle size={25}/></a>
                    <label>{validateAreaName(areaName)}</label>
                </div>
                <div className=' d-flex'>
                  <div className='profile-infos' style={{cursor: 'pointer'}} onClick={() => navigate("/profile")}>
                    <User />
                    {
                        userName ? 
                        <span>{userName}</span> : 
                        <a onClick={() => {navigate("/")}}>Faça Login</a>
                    }   
                  </div>
                    <>
                     <label className='logOutBtn'><LogOut size={25} onClick={logOut} style={{cursor: 'pointer'}} /></label>
                    </>
                </div>
            </div>
        </nav>
    </div>
  )
}

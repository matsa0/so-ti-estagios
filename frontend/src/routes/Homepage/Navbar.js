import React, { useEffect, useState } from 'react'
import { LogOut, Search, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate("")
    const [userName, setUserName] = useState(null)

    useEffect(() => {
        const studentAlreadyLogged = localStorage.getItem("studentLogged")
        const companyAlreadyLogged = localStorage.getItem("companyLogged")

        setUserName(getUserNameLogged(studentAlreadyLogged, companyAlreadyLogged))
    }, [])

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
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">SÓ TI ESTÁGIOS</a>
                <form class="d-flex justify-content-center" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit"><Search /></button>
                </form>
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
                     <LogOut onClick={logOut} style={{cursor: 'pointer'}} />
                    </>
                </div>
            </div>
        </nav>
    </div>
  )
}

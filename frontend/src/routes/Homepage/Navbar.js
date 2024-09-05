import React from 'react'
import { LogOut, Search, User } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Navbar({ userName }) {
    const navigate = useNavigate("")

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

  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">SÓ TI ESTÁGIOS</a>
                <form class="d-flex justify-content-center" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit"><Search /></button>
                </form>
                <div className='profile-infos d-flex'>
                    <User style={{cursor: 'pointer'}}/>
                    {userName}
                    <LogOut onClick={logOut} style={{cursor: 'pointer'}} />
                </div>
            </div>
        </nav>
    </div>
  )
}

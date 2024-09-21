import React from 'react'
import { LogOut, User } from 'lucide-react'
import {useNavigate } from 'react-router-dom'

export default function Navbar({ areaName, userName }) {
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
                <div class="d-flex justify-content-center">
                    {areaName}
                </div>
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

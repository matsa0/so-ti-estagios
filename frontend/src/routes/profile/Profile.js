import React, { useState } from 'react'
import Navbar from '../Homepage/Navbar'
import FormStudent from './FormStudent';
import FormCompany from './FormCompany';

export default function Profile() {
    const [user, setUser] = useState("");

    useState(() => {
        const studentLogged = localStorage.getItem("studentLogged")
        const companyLogged = localStorage.getItem("companyLogged")

        if(studentLogged) {
            const studentData = JSON.parse(studentLogged)
            setUser(studentData)
        }
        if(companyLogged) {
            const companyData = JSON.parse(companyLogged)
            setUser(companyData)
        }
    })

  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
            {user.firstName?
            <>
                <h1>Olá, {user.firstName + " " + user.lastName + "!"}</h1>
                <FormStudent user={user} />
            </>
            : 
            <>
                <h1>Olá, {user.name + "!"}</h1>
                <FormCompany user={user} />
            </>
            }
        </div>
      </div>
    </div>
  )
}

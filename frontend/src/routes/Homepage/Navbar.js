import React, { useEffect, useState } from 'react'
import { LogOut, Search, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Navbar() {
    const [userName, setUserName] = useState(null);
    const [jobs, setJobs] = useState([]); // Estado para armazenar os jobs
    const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o valor da pesquisa
    const [filteredJobs, setFilteredJobs] = useState([]); // Estado para armazenar os jobs filtrados
    const navigate = useNavigate();

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

    const getJobs = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/v1/job");
          if (response.status === 200) {
            const responseData = response.data;
            setJobs(responseData);
            setFilteredJobs(responseData); // Inicialmente, todos os jobs são exibidos
          }
        } catch (error) {
          alert("Undefined error!");
          console.log("ERROR: ", error);
        }
      };

    useEffect(() => {
        getJobs()
    }, [])

    useEffect(() => {
        if(searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const results = jobs.filter(job =>
              job.title.toLowerCase().includes(lowerCaseSearchTerm) 
            );
            setFilteredJobs(results);
        } else {
            setFilteredJobs([])
        }
      }, [searchTerm, jobs]);

  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">SÓ TI ESTÁGIOS</a>
                <form class="d-flex justify-content-center" role="search">
                    <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="Procure por vagas..." 
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
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
        <div>
            {filteredJobs.map(job => (
            <div key={job.id} className='job-card'>
                <p>{job.title}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

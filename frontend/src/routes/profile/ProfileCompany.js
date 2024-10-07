import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { House, CalendarDays   } from 'lucide-react';


export default function ProfileCompany() {
    const { id } = useParams();
    const[company, setCompany] = useState("");
  
    const getCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/company/${id}`)
        if(response.status === 200) {
          setCompany(response.data)
        }
      } catch(error) {
        console.log("Error: ", error)
      }
    }

    useEffect(() => {
        getCompany()
    }, [])
    
  return (
    <div>
      <Navbar />

      <div className='candidateContent'>
          <div className='container d-flex'>
              <div className='row col-8 mainCol'>
                <h1>{company.name}</h1>
                <p className='studentDescription'>{company.about}</p>
              </div>
              <div className='row col-4 secondaryCol'>
                <label className='studentCity'>{company.hqLocation}<House color="#86C232" /></label>
                <label className='studentAcademy'>{company.releaseYear} <CalendarDays color="#86C232" /></label>
              </div>
            </div>
        </div>
    </div>
  )
}

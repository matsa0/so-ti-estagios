import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BookMarked, GraduationCap, House, Mail } from 'lucide-react';

export default function ProfileAppliedStudent() {
  const { id } = useParams();
  const[student, setStudent] = useState("");

  const getStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/student/${id}`)
      if(response.status === 200) {
        setStudent(response.data)
      }
    } catch(error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    getStudent()
    console.log(student)
  }, [])

  return (
    <div>
        <Navbar />

        <div className='candidateContent'>
          <div className='container d-flex'>
              <div className='row col-8 mainCol'>
                <h1>{student.firstName + ' ' + student.lastName}</h1>
                <p className='studentDescription'>{student.description}</p>
              </div>
              <div className='row col-4 secondaryCol'>
                <label className='studentCity'>{student.city}<House color="#86C232" /></label>
                <label className='studentCollege'>{student.college} <GraduationCap color="#86C232" /></label>
                <label className='studentAcademy'>{student.academy} <BookMarked color="#86C232" /></label>
                <label className='studentEmail'>{student.email} <Mail color="#86C232" /></label>
              </div>
            </div>
        </div>
    </div>
  )
}

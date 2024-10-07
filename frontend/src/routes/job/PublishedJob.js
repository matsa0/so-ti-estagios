import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { CircleUserRound } from 'lucide-react';
import './Job.css'

export default function PublishedJob() {
    const { id } = useParams();
    const [students, setStudents] = useState([]);
    const navigate = useNavigate("");

    const getStudentsByJob = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/job/${id}`)

            if(response.status === 200) {
                const data = response.data
                const studentIds = data.students.map(student => student.id)
                
                const studentInfos = await Promise.all(
                    studentIds.map(async (id) => {
                        const parsedId = parseInt(id)

                        const studentInfoResponse = await axios.get(`http://localhost:8080/api/v1/student/${parsedId}`)
                        if(studentInfoResponse.status === 200) {
                            return studentInfoResponse.data
                        } else {
                            console.log("Error loading student infos: ", studentInfoResponse.status)
                        }
                    })
                )
                setStudents(studentInfos) 
            }
        } catch(error) {
            alert("Undefined error!")
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        getStudentsByJob()
    }, [])

    useEffect(() => {
        console.log("students", students)
    }, [students])

  return (
    <> 
    <Navbar />
    <div className='candidatesContent'>
      <h1>Candidatos</h1>

      <div className='container'> 
        <div className='row'>
          {students.length > 0 ? (
            students.map(student => (
              <div key={student.id} className='card cardJob p-2 m-3'>
                <label><CircleUserRound size={35}/></label>
                <label className='studentName'>{student.firstName + ' ' + student.lastName}</label>
                <label className='studentCity'>{student.city}</label>
                <label className='studentAcademy'>{student.academy}</label>
                <a onClick={() => navigate(`/profileAppliedStudent/${student.id}`)} className="companyBtn btn btn-primary">Visualizar perfil</a>
              </div>
            ))
          ) : (
            <p>Sem cadidatos</p>
          )}
        </div>
      </div>

    </div>
    
    </>
  )
}

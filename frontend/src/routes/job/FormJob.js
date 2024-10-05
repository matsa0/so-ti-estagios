import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Job.css'

export default function FormJob() {
  const { id } = useParams("");
  const[job, setJob] = useState("");
  const[title, setTitle] = useState(job.title ?? "");
  const[modality, setModality] = useState(job.modality ?? "OFFICE");
  const[location, setLocation] = useState(job.modality ?? ""); 
  const[area, setArea] = useState(job.area ?? "SOFTWARE_DEVELOPMENT");
  const[description, setDescription] = useState(job.description ?? "");

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const onModalityChange = (e) => {
    setModality(e.target.value)
  }
  const onLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const onAreaChange = (e) => {
    setArea(e.target.value)
  }
  const onDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const getJobInfos = async () => {
    try {
      if(id) {
        const response = await axios.get(`http://localhost:8080/api/v1/job/${id}`)
  
        if(response.status === 200) {
          setJob(response.data)
          setTitle(response.data.title);
          setModality(response.data.modality);
          setLocation(response.data.location);
          setArea(response.data.area);
          setDescription(response.data.description);
        }

      }
    } catch(error) {
      console.log("ERROR: ", error)
    }
  }

  useEffect(() => {
    getJobInfos()
  }, [id])

  const onSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.put(`http://localhost:8080/api/v1/job/${id}`, {
        id: job.id,
        title,
        modality,
        location,
        area,
        description
      })

      if(response.status === 200) {
        alert("Informações atualizadas com sucesso!")
      }
      else {
        console.log("Status error: ", response.status)
      }
    }
    catch(error) {
      alert("Error ao atualizar informações!")
      console.log("OnSubmit error: ", error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='container publishJobContent'>
        <div className='row'>
            <h1>Atualize as informações da vaga</h1>
            <form className='formCompany' onSubmit={(e) => {onSubmit(e)}}>
                <div className='form-group'>
                    <label for="title">Título</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={title ? title : 'Digite o título da vag'}
                    id='title'
                    onChange={(e) => onTitleChange(e)}
                    value={title}
                    required></input>
                </div>
                <div className='form-group'>
                    <label for="modality">Modalidade</label>
                    <select 
                    id='modality' 
                    className='form-control' 
                    value={modality}
                    onChange={(e) => onModalityChange(e)}>
                        <option value='OFFICE'>Presencial</option> 
                        <option value='REMOTE'>Remoto</option> 
                        <option value='HYBRID'>Híbrido</option> 
                    </select>
                </div>
                <div className='form-group'>
                    <label for="local">Local</label>
                    <input
                    type='text'
                    className='form-control'
                    id='local'
                    value={location}
                    placeholder={location ? location : 'Digite o local da vaga'}
                    onChange={(e) => onLocationChange(e)}></input>
                </div>
                <div className='form-group'>
                    <label for="area">Area</label>
                    <select 
                    id='area' 
                    className='form-control'
                    value={area}
                    onChange={(e) => onAreaChange(e)}>
                        <option value='SOFTWARE_DEVELOPMENT'>Desenvolvimento de Software</option> 
                        <option value='DATA_SCIENCE'>Ciência de Dados</option> 
                        <option value='ARTIFICIAL_INTELLIGENCE'>Inteligência Artificial</option> 
                        <option value='CYBERSECURITY'>Cibersegurança</option> 
                        <option value='DEVOPS'>DevOps</option> 
                        <option value='UXUI'>UX/UI</option> 
                    </select>
                </div>
                <div className='form-group'>
                    <label for="description">Descrição</label>
                    <textarea
                    type='text'
                    className='form-control inputJobDescription'
                    id='description'
                    placeholder={description ? description : 'Digite a descrição da vaga'}
                    value={description}
                    onChange={(e) => onDescriptionChange(e)}
                    required></textarea>
                </div>
                <button type="submit" className="submitBtn btn btn-primary">Atualizar</button>
            </form>
        </div>
      </div>
    </div>
  )
}

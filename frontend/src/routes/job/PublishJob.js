import React, { useEffect } from 'react'
import Navbar from '../Homepage/Navbar'
import { useState } from 'react';

import axios from 'axios';

export default function PublishJob() {
    const[company, setCompany] = useState();
    const[title, setTitle] = useState("");
    const[modality, setModality] = useState("OFFICE");
    const[location, setLocation] = useState(""); 
    const[area, setArea] = useState("SOFTWARE_DEVELOPMENT");
    const[description, setDescription] = useState("");

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

    useEffect(() => {
        const companyLogged = localStorage.getItem('companyLogged');

        if(companyLogged) {
            const companyJson = JSON.parse(companyLogged)
            setCompany(companyJson)
        }
        else {
            console.log("Error, companyLogged: ", companyLogged)
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/company/${company.id}/addJob`, {
                title,
                modality,
                location,
                area,
                description
            })

            if(response.status === 201) {
                alert("Vaga publicada com sucesso!")
                clearInputs()
            }
            else {
                alert("Status error: ", response.status)
            }
        }
        catch (error) {
            alert("Erro desconhecido!")
            console.log("Error submiting job: ", error)
        }
    }

    const clearInputs = () => {
        setTitle("");
        setModality("OFFICE");
        setLocation(""); 
        setArea("SOFTWARE_DEVELOPMENT");
        setDescription("");
    }
    
    return (
    <div className='publishJob'>
      <Navbar />
      <div className='container publishJobContent'>
        <div className='row'>
            <h1>Publique uma vaga</h1>
            <form className='formCompany' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'> 
                    <label for="title">Título</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    id='title'
                    placeholder='Digite o título da vaga'
                    value={title}
                    onChange={(e) => onTitleChange(e)}></input>
                </div>
                <div className='form-group selectModality'>
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
                    placeholder='Digite o local da vaga'
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
                    placeholder='Digite a descrição da vaga'
                    value={description}
                    onChange={(e) => onDescriptionChange(e)}>
                    </textarea>
                </div>
                <button type="submit" className="submitBtn btn btn-primary">Publicar</button>
            </form>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import axios from 'axios';
import './Profile.css'

export default function FormStudent({ user }) {
    const[firstName, setFirstName] = useState(user.firstName ?? "");
    const[lastName, setLastName] = useState(user.lastName ?? "");
    const[email, setEmail] = useState(user.email ?? "");
    const[city, setCity] = useState(user.city ?? "");
    const[birthDate, setBirthDate] = useState(user.birthDate ?? "");
    const[college, setCollege] = useState(user.city ?? "");
    const[academy, setAcademy] = useState(user.academy ?? "");
    const[description, setDescription] = useState(user.description ?? "");
    
    const onFistNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onCityChange = (e) => {
        setCity(e.target.value)
    }
    const onBirthDateChange = (e) => {
        setBirthDate(e.target.value)
    }
    const onCollegeChange = (e) => {
        setCollege(e.target.value)
    }
    const onAcademyChange = (e) => {
        setAcademy(e.target.value)
    }
    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const userData = {
        id: user.id,
        firstName,
        lastName,
        email,
        city,
        birthDate,
        college,
        academy,
        description
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/student/${user.id}`, userData) 

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
    <div className='container d-flex justify-content-center'>
        <div className='row'>
            <h3>Atualize suas informações</h3>
            <form className='formStudent' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <label for="inputFirstName">Primeiro Nome</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.firstName} 
                    id='inputFirstName'
                    onChange={(e) => onFistNameChange(e)}
                    value={firstName}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputEmail">Último Nome</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.lastName}
                    id='inputLastName'
                    onChange={(e) => onLastNameChange(e)}
                    value={lastName}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputEmail">Email</label>
                    <input 
                    type='email' 
                    className='form-control' 
                    placeholder={user.email}
                    id='inputEmail'
                    onChange={(e) => onEmailChange(e)}
                    value={email}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputBirthDate">Data de nascimento</label>
                    <input 
                    type='date' 
                    min="1950-01-01"
                    max="2008-12-31"
                    className='form-control' 
                    placeholder={user.birthDate? user.birthDate : 'Digite a sua data de nascimento'} 
                    id='inputBirthDate'
                    onChange={(e) => onBirthDateChange(e)}
                    value={birthDate}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputCity">Cidade</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.city? user.city : 'Digite a cidade em que reside'} 
                    id='inputCity'
                    onChange={(e) => onCityChange(e)}
                    value={city}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputCollege">Faculdade</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.college? user.college : 'Digite sua formação acadêmica'}
                    id='inputCollege'
                    onChange={(e) => onCollegeChange(e)}
                    value={college}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputAcademy">Curso</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.academy? user.academy : 'Digite o curso em andamento'}
                    id='inputAcademy'
                    onChange={(e) => onAcademyChange(e)}
                    value={academy}
                    ></input>
                </div>
                <div className='form-group'>
                    <label for="inputDescription">Fale sobre você</label>
                    <textarea 
                    type='text' 
                    className='form-control inputJobDescription' 
                    placeholder={user.description? user.description : 'Digite uma texto sobre sua trajetória'} 
                    id='inputDescription'
                    onChange={(e) => onDescriptionChange(e)}
                    value={description}
                    ></textarea>
                </div>
                <button type="submit" className="submitBtn btn btn-primary">Atualizar</button>
            </form>
        </div>
    </div>
  )
}

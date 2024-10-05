import React, { useState } from 'react'
import axios from 'axios';

export default function FormCompany({ user }) {
  const[name, setName] = useState(user.name ?? ""); // '??' nullish coalescing. Returns user.<attribute> if not null or undefined
  const[cnpj, setCnpj] = useState(user.cnpj ?? "");
  const[releaseYear, setReleaseYear] = useState(user.releaseYear ?? "");
  const[hqLocation, setHqLocation] = useState(user.hqLocation ?? "");
  const[about, setAbout] = useState(user.about ?? "");

  const onNameChange = (e) => {
    setName(e.target.value)
  }
  const onCnpjChange = (e) => {
    setCnpj(e.target.value)
  }
  const onReleaseYearChange = (e) => {
    setReleaseYear(e.target.value)
  }
  const onHqLocationChange = (e) => {
    setHqLocation(e.target.value)
  }
  const onAboutChange = (e) => {
    setAbout(e.target.value)
    console.log("About value:", e.target.value);  // Adicionando console.log para verificar
  }

  const userData = {
    id: user.id,
    name,
    cnpj,
    releaseYear,
    hqLocation, 
    about
}

  const onSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.put(`http://localhost:8080/api/v1/company/${user.id}`, userData)

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
            <form className='formCompany' onSubmit={(e) => {onSubmit(e)}}>
                <div className='form-group'>
                    <label for="inputFirstName">Nome</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.name}
                    id='inputName'
                    onChange={(e) => onNameChange(e)}
                    value={name}
                    required></input>
                </div>
                <div className='form-group'>
                    <label for="inputCnpj">CNPJ</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.cnpj}
                    id='inputCnpj'
                    onChange={(e) => onCnpjChange(e)}
                    value={cnpj}
                    required></input>
                </div>
                <div className='form-group'>
                    <label for="inputYear">Ano de criação</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.releaseYear ? user.releaseYear : 'Digite o ano de criação da empresa' }
                    id='inputYear'
                    onChange={(e) => onReleaseYearChange(e)}
                    value={releaseYear}
                    required></input>
                </div>
                <div className='form-group'>
                    <label for="inputHqLocation">Local da Sede</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    placeholder={user.hqLocation ? user.hqLocation : 'Digite o local da sede' }
                    id='inputHqLocation'
                    onChange={(e) => onHqLocationChange(e)}
                    value={hqLocation}
                    required></input>
                </div>
                <div className='form-group'>
                    <label for="inputAbout">Sobre a empresa</label>
                    <textarea 
                    type='text' 
                    className='form-control inputJobDescription' 
                    placeholder={user.about ? user.about : 'Digite um texto sobre a empresa' }
                    id='inputAbout'
                    onChange={(e) => onAboutChange(e)}
                    value={about}
                    required></textarea>
                </div>
                <button type="submit" className="submitBtn btn btn-primary">Atualizar</button>
            </form>
        </div>
    </div>
  )
}

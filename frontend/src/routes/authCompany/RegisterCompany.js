import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/Register.css'
import axios from 'axios';

export default function RegisterCompany() {
    let navigate = useNavigate();

    const[name, setName] = useState("")
    const[cnpj, setCnpj] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onCnpjChange = (e) => {
        setCnpj(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const companyData = {
        name: name,
        cnpj: cnpj,
        password: password
    }

    const isValidRegister = (companies) => {
        if(password !== confirmPassword) {
            alert("Confirm your password!")
            return false;
        }

        for(let company of companies) {
            if(cnpj === company.cnpj) {
                alert("CNPJ is already registered!")
                return false;    
            }
        }
        return true;
    }

    const postCompany = async () => {
        try { 
            const studentAlreadyLogged = localStorage.getItem("studentLogged")
            const companyAlreadyLogged = localStorage.getItem("companyLogged")
    
            if(studentAlreadyLogged) {
              alert("Already Logged as student. Log out first!")
              return;
            }
            if(companyAlreadyLogged) {
              alert("Already Logged as company. Log out first!") 
              return;
            }

            const response = await axios.post("http://localhost:8080/api/v1/company", companyData)
    
            if(response.status === 201) {
                localStorage.setItem("companyLogged", JSON.stringify(response.data))
                alert("Registered successfully!")
                navigate("/homepage")
            }
            else {
                alert("Error registering!")
                console.log("Error posting, status: ", response.status)
            }
        }
        catch(error) {
            alert("Error posting data")
            console.log("Error posting: ", error)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.get("http://localhost:8080/api/v1/company")

            if(response.status === 200) {
                const companies = response.data
                const isValid = isValidRegister(companies)

                if(isValid) {
                    postCompany()
                }   
            }
        }
        catch(error) {
            console.log("ERROR SUBMITING FORM: ", error)
        }
    }

  return (
    <div className='centerScreen'>
        <div className='container registerScope'>
            <div className='row align-items-center'>
                <div className='col'>
                    <h1>BEM-VINDO(a) A SÓ TI ESTÁGIOS</h1>
                    <p>Encontre estudantes qualificados para preencher as vagas da sua empresa.</p>
                    <h3>Possui um cadastro?</h3>
                    <p>Possui cadastro? <Link to={"/loginCompany"}>Entre agora!</Link></p>
                </div>
                <div className='col-6'>
                    <h1>Crie sua conta</h1>
                    <p>Preencha os campos</p>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='form-group'>
                            <label for="inputName">Nome</label>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Digite o nome da empresa' 
                            id='inputName'
                            value={name}
                            onChange={(e) => {onNameChange(e)}}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputCnpj">CNPJ</label>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Digite o CNPJ da empresa' 
                            id='inputCnpj'
                            value={cnpj}
                            onChange={(e) => onCnpjChange(e)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputPassword">Senha</label>
                            <input 
                            type='password' 
                            className='form-control' 
                            placeholder='Digite sua senha' 
                            id='inputPassword'
                            value={password}
                            onChange={(e) => onPasswordChange(e)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputConfirmPassword">Confirmar Senha</label>
                            <input 
                            type='password' 
                            className='form-control' 
                            placeholder='Confirme sua senha' 
                            id='inputConfirmPassword'
                            value={confirmPassword}
                            onChange={(e) => onConfirmPasswordChange(e)}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

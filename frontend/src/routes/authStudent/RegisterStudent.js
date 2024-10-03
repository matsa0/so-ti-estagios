import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Register.css'
import axios from 'axios';
import { SearchCode } from 'lucide-react';


export default function Register() {
    let navigate = useNavigate();

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }   

    const studentData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    const isValidRegister = (students) => {
        if(password !== confirmPassword) {
            alert("Confirm your password!")
            return false;
        }

        for(let student of students) {
            if(email === student.email) {
                alert("Email is already registered!")
                return false;
            }
        }
        return true;
    }

    const postStudent = async () => {
        try { 
            const response = await axios.post("http://localhost:8080/api/v1/student", studentData)
    
            if(response.status === 201) {
                localStorage.setItem("studentLogged", JSON.stringify(response.data))
                alert("Registered successfully!")
                navigate("/homepage")
            }
            else {
                alert("Error registering!")
                console.log("Error posting, status: ", response.status)
            }
        }
        catch(error) {
            alert("Error posting data!")
            console.log("Posting Error: ", error)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

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

            const response = await axios.get("http://localhost:8080/api/v1/student")

            if(response.status === 200) {
                const students = response.data
                const isValid = isValidRegister(students)

                if(isValid) {
                    postStudent()
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
                <div className='logo d-flex'>
                    <h1>SÓ TI ESTÁGIOS</h1> 
                    <label className='iconSearch'><SearchCode size={50} /></label>
                </div>
                <p className='mainPhrase'>O caminho de oportunidades para estudantes da área da tecnologia da informação.</p>

                <form className="registerForm" onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <label for="inputFirstName">Primeiro nome</label>
                        <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Digite seu nome' 
                        id='inputFirstName'
                        onChange={(e) => {onFirstNameChange(e)}}
                        value={firstName}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputLastName">Último nome</label>
                        <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Digite seu sobrenome' 
                        id='inputLastName'
                        onChange={(e) => {onLastNameChange(e)}}
                        value={lastName}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputEmail">Email</label>
                        <input 
                        type='email' 
                        className='form-control' 
                        placeholder='Digite seu email' 
                        id='inputEmail'
                        onChange={(e) => onEmailChange(e)}
                        value={email}
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
                        onChange={(e) => {onPasswordChange(e)}}
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
                        onChange={(e) => {onConfirmPasswordChange(e)}}
                        ></input>
                    </div>
                    <button type="submit" className="submitBtn btn btn-primary">Registrar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

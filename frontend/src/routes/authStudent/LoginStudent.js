import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/Login.css'
import axios from 'axios'


export default function Login() {
  let navigate = useNavigate()

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    localStorage.removeItem("studentLogged")
    localStorage.removeItem("companyLogged")
  }, []) //only executed once, when the component(App.js) is render

  const isValidLogin = (students) => {
    for(let student of students) {
      if(email === student.email) {
        if(password === student.password) {
          alert("Login successful!")
          return student;
        }
        else {
          alert("Incorrect password! Try again.")
          return null;
        }
      }
    }
    console.log("Invalid student! Create a account.")
    return null;
  }


  const onSubmit = async (e) => {
    e.preventDefault() //stop reload after form submit

    try {
      const response = await axios.get("http://localhost:8080/api/v1/student")

      if(response.status === 200) {
        const students = response.data
        const studentLogged = isValidLogin(students)

        if(studentLogged) {
          localStorage.setItem("studentLogged", JSON.stringify(studentLogged))
          navigate("/homepage")
        }
      }
      else {
        alert("HTTP Error: ", response.status)
      }
    }
    catch(error) {
      console.log("Logging error: ", error)
    }
  }

  return (
    <div>
      <div className='centerScreen'>
        <div className='container loginScope'>
            <div className='row'>
                <h1>SÓ TI ESTÁGIOS</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group'>
                        <label for="inputEmail">Email</label>
                        <input 
                        type='email' 
                        className='form-control' 
                        placeholder='Digite seu email' 
                        id='inputEmail'
                        onChange={(e) => onEmailChange(e)}
                        value={email}
                        required></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputPassword">Senha</label>
                        <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Digite sua senha' 
                        id='inputPassword'
                        onChange={(e) => onPasswordChange(e)}
                        value={password}
                        required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
                <div className='register-btn'>
                    <p>Não possui cadastro? <Link to={"/register"}>Cadastre-se agora!</Link></p>
                </div>
                <Link to={"/loginCompany"}><button type="button" className="btn btn-success">Sou empresa!</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

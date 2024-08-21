import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/Login.css'
import axios from 'axios'


export default function Login() {
  let navigate = useNavigate()

  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const isValidLogin = (users) => {
    let loginSuccess = false
    //=== comparação estrita
    for(let user of users) {
      if(username === user.username && password === user.password) {
        loginSuccess = true
        alert("Login successful!")
        break;
      }
      else if(username === user.username && password !== user.password) {
        console.log("Incorrect password! Try again.")
        break;
      }
      else if(username !== user.username) {
        console.log("Invalid user! Create a account.")
        break;
      }
    }

    return loginSuccess
  }


  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get("http://localhost:8080/api/v1/student")

      if(response.status === 200) {
        const users = response.data
        let validLogin = isValidLogin(users)

        if(validLogin) {
          navigate("/home")
        }
        else {
          alert("Invalid Credentials!")
          console.log(validLogin)
        }
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
                        <label for="inputEmail">Username</label>
                        <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Digite seu username' 
                        id='inputUsername'
                        onChange={(e) => onUsernameChange(e)}
                        value={username}></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputPassword">Senha</label>
                        <input 
                        type='password' 
                        className='form-control' 
                        placeholder='Digite sua senha' 
                        id='inputPassword'
                        onChange={(e) => onPasswordChange(e)}
                        value={password}></input>
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

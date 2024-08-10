import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Login.css'


export default function Login() {
  return (
    <div>
      <div className='centerScreen'>
        <div className='container loginScope'>
            <div className='row'>
                <h1>SÓ TI ESTÁGIOS</h1>
                <form>
                    <div className='form-group'>
                        <label for="inputEmail">Username</label>
                        <input type='text' className='form-control' placeholder='Digite seu username' id='inputUsername'></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputPassword">Senha</label>
                        <input type='password' className='form-control' placeholder='Digite sua senha' id='inputPassword'></input>
                    </div>
                    <Link to={"/homepage"}><button type="submit" className="btn btn-primary">Entrar</button></Link>
                </form>
                <div className='register-btn'>
                    <p>Não possui cadastro? <Link to={"/register"}>Cadastre-se agora!</Link></p>
                </div>
                <Link to={"/loginCompany"}><button type="submit" className="btn btn-success">Sou empresa!</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

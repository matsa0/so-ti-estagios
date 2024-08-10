import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Login.css'

export default function LoginCompany() {
  return (
    <div>
      <div className='centerScreen'>
        <div className='container loginScope'>
            <div className='row'>
                <h1>SÓ TI ESTÁGIOS</h1>
                <h2>Empresa</h2>
                <form>
                    <div className='form-group'>
                        <label for="inputEmail">CNPJ</label>
                        <input type='text' className='form-control' placeholder='Digite seu CNPJ' id='inputCnpj'></input>
                    </div>
                    <div className='form-group'>
                        <label for="inputPassword">Senha</label>
                        <input type='password' className='form-control' placeholder='Digite sua senha' id='inputPassword'></input>
                    </div>
                    <Link to={"/homepage"}><button type="submit" className="btn btn-primary">Entrar</button></Link>
                </form>
                <div className='register-btn'>
                    <p>Não possui cadastro? <Link to={"/registerCompany"}>Cadastre-se agora!</Link></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

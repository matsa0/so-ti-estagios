import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Register.css'


export default function Register() {
  return (
    <div className='centerScreen'>
        <div className='container registerScope'>
            <div className='row align-items-center'>
                <div className='col'>
                    <h1>BEM-VINDO(a) A SÓ TI ESTÁGIOS</h1>
                    <p>O caminho de oportunidades para estudantes da área da tecnologia da informação.</p>
                    <h3>Possui um cadastro?</h3>
                    <p>Possui cadastro? <Link to={"/"}>Entre agora!</Link></p>

                    <Link to={"/registerCompany"}><button type="submit" className="btn btn-success">Sou empresa!</button></Link>
                </div>
                <div className='col-6'>
                    <h1>Crie sua conta</h1>
                    <p>Preencha os campos</p>
                    <form>
                        <div className='form-group'>
                            <label for="inputName">Primeiro nome</label>
                            <input type='text' className='form-control' placeholder='Digite seu nome' id='inputName'></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputEmail">Último nome</label>
                            <input type='text' className='form-control' placeholder='Digite seu sobrenome' id='inputLastName'></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputPassword">Senha</label>
                            <input type='password' className='form-control' placeholder='Digite sua senha' id='inputPassword'></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputConfirmPassword">Confirmar Senha</label>
                            <input type='password' className='form-control' placeholder='Confirme sua senha' id='inputConfirmPassword'></input>
                        </div>
                        <Link to={"/homepage"}><button type="submit" className="btn btn-primary">Registrar</button></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

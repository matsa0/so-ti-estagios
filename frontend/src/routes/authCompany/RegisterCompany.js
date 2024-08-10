import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Register.css'

export default function RegisterCompany() {
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
                    <form>
                        <div className='form-group'>
                            <label for="inputName">Nome</label>
                            <input type='text' className='form-control' placeholder='Digite o nome da empresa' id='inputName'></input>
                        </div>
                        <div className='form-group'>
                            <label for="inputCnpj">CNPJ</label>
                            <input type='text' className='form-control' placeholder='Digite o CNPJ da empresa' id='inputCnpj'></input>
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

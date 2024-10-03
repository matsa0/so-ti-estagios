import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchCode } from "lucide-react";

export default function LoginCompany() {
  let navigate = useNavigate();

  const [cnpj, setCnpj] = useState("")
  const [password, setPassword] = useState("")

  const onCnpjChange = (e) => {
    setCnpj(e.target.value)
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  };


  const isValidCompany = (companies) => {
    for(let company of companies) {
      if(cnpj === company.cnpj) {
        if(password === company.password) {
          alert("Successful Login!")
          return company;
        }
        else {
          alert("Incorrect Password! Try again.")
          return null;
        }
      }
    }
    alert("Invalid company! Create a account.")
    return null;
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get("http://localhost:8080/api/v1/company")

      if(response.status === 200) {
        const companies = response.data
        const companyLogged = isValidCompany(companies)

        if(companyLogged) {
          localStorage.setItem("companyLogged", JSON.stringify(companyLogged))
          navigate("/homepage")
        }
      }
      else {
        alert("HTTP Error: ", response.status)
      }
    }
    catch(error) {
      console.log("UNDEFINED ERROR: ", error)
    }
  }

  return (
    <div>
      <div className="centerScreen">
        <div className="container loginScope loginCompanyScope">
          <div className="row">
              <div className='logo d-flex'>
                <h1>SÓ TI ESTÁGIOS</h1> 
                <label className='iconSearch'><SearchCode size={50} /></label>
              </div>
              <label className="companyText">Empresa</label>
            <form className='loginForm' onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label for="inputEmail">CNPJ</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu CNPJ"
                  id="inputCnpj"
                  value={cnpj}
                  onChange={onCnpjChange}
                  required
                ></input>
              </div>
              <div className="form-group">
                <label for="inputPassword">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  id="inputPassword"
                  value={password}
                  onChange={onPasswordChange}
                  required
                ></input>
              </div>
              <button type="submit" className="submitBtn btn btn-primary">
                Entrar
              </button>
            </form>
            <p>Não possui cadastro? <Link to={"/registerCompany"}><label className='register-btn'>Cadastre-se agora!</label></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

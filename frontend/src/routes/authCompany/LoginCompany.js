import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";

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
        <div className="container loginScope">
          <div className="row">
            <h1>SÓ TI ESTÁGIOS</h1>
            <h2>Empresa</h2>
            <form onSubmit={(e) => onSubmit(e)}>
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
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </form>
            <div className="register-btn">
              <p>
                Não possui cadastro?{" "}
                <Link to={"/registerCompany"}>Cadastre-se agora!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

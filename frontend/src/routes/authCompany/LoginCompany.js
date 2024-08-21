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
    let loginSuccess = false

    for(let company of companies) {
      if(cnpj === company.cnpj && password === company.password) {
        loginSuccess = true
        break;
      }
      else if(cnpj === company.cnpj && password !== company.password) {
        console.log("Incorrect Password! Try again.")
        console.log(password)
        console.log(company.password)
        alert("Incorrect Password! Try again.")
        break;
      }
      else {
        console.log("Invalid user! Create a account.")
        alert("Invalid user! Create a account.")
        break;
      }
    }
    return loginSuccess
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get("http://localhost:8080/api/v1/company")

      if(response.status === 200) {
        const companies = response.data

        if(isValidCompany(companies) === true) {
          console.log("Successful Login!")
          alert("Successful Login!")
          navigate("/homepage")
        }
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

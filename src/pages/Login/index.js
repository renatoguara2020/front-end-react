import React, { useState } from 'react';

import api  from '../../config/configApi';

const Login = () =>{

    const [usuario, setUsuario] = useState({
        
        userName: '', 
        password: '',
        
    });

    const dadosLogin = e => setUsuario({...usuario, [e.target.name]: e.target.value});

    const loginSubmit = async e => {
        e.preventDefault();
        
        console.log(usuario.userName);
        console.log(usuario.password);
        

        const headers = {
            'Content-Type': 'application/json'
        }

        await api.post("/login", usuario, { headers })
        .then((response) => {
            console.log(response);
        }).catch((err) => {
            if(err.response){
                console.log(err.response);
            }else{
                console.log("Erro: tente mais tarde");
            }            
        });
    }

    return (
      <div className="container-lg">
          <h1>Registro de Login </h1>
          <form className="row g-3 needs-validation" onSubmit={loginSubmit}>
          <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" name="userName"  onChange={dadosLogin} placeholder="Digite seu UserName"/>
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">Password</label>
            <input type="text" className="form-control" name="password" onChange={dadosLogin} placeholder="Digite sua senha"/>
            <div className="invalid-feedback">
              Please provide a valid Password.
            </div>
          </div>
          
          
          
          <div className="col-12">
            <button className="btn btn-outline-warning" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    );
  }

export default Login;
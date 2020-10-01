import React from "react";
import UIButton from "components/UI/Button/Button";
import { Link} from 'react-router-dom';


import "./Login.css";
import "../../UI/Button/Button.css";
import imageLogo from "../../../assets/imagens/logoColombo.png"

const UsuarioLogin = () => {
    return (
  <body id = "tela-login">
    <div class="img-container">
    <img src={imageLogo} width="320" height="205" alt='logo da aplicação' />
    </div>
    <source/>
    {/* <nav>
	<a href="http://localhost:3000/">Home</a>
	<a href="#">Quem Somos</a>
	<a href="#">Contato</a>
	<div class="animation start-home"></div>
</nav> */}

    <div className="usuario-login">
    {/* <h1 className="usuario-login_title">Entre com sua conta</h1> */}
    <form autoComplete="nope">
      <div className="usuario-login_form-control">
        {/* <label htmlFor="email">E-mail</label> */}
        <input id="email * " type="text" placeholder="Email" name="email" autoComplete="off" />
      </div>
      <div className="usuario-login_form-control">
        {/* <label htmlFor="password">Senha</label> */}
        <input id="password * " type="password" placeholder="Senha" name="password" />
      </div>
      <UIButton
        type="submit"
        theme="contained-green"
        className="usuario-login_submit-button"
        rounded
        // Link className="botao-login" to="/"
        >
        {/* Entrar */}
      <Link className="botao-entrar" to="/colombo_home">Entrar</Link>
      </UIButton>
        <a id="suporte-senha" href="/recuperar_senha">Esqueceu a senha?</a>

      </form>
        </div>
  </body>
  );
};

export default UsuarioLogin;



import React from "react";
import UIButton from "components/UI/Button/Button";
import { Link} from 'react-router-dom';


import "./Recuperar_senha.css";
import "../../UI/Button/Button.css";
import imageLogo from "../../../assets/imagens/logoColombo.png"

const RecuperarSenha = () => {
    return (
  <body id = "tela-suporte">
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

    <div className="rec-senha">
    {/* <h1 className="usuario-login_title">Entre com sua conta</h1> */}
    <form id="form-rec-senha" autoComplete="nope">
      <div className="rec-senha_form-control">
        {/* <label htmlFor="email">E-mail</label> */}
        <input id="email" type="text" placeholder="Email" name="email" autoComplete="off" />
      </div>
      <UIButton
        type="submit"
        theme="contained-green"
        className="rec-senha_submit-button"
        rounded
        // Link className="botao-login" to="/"
        >
        {/* Entrar */}
      <Link className="botao-entrar" to="/">Recuperar Senha</Link>
      </UIButton>
      <a id="suporte-senha" href="/login">Login</a>
      

      </form>
        </div>
  </body>
  );
};

export default RecuperarSenha;



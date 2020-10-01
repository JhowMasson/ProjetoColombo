import React from 'react';
import './Home.css';
import { Link} from 'react-router-dom';
import imageLogo from "../../assets/imagens/logoColombo.png"


const UsuarioLogin = () => { 
  return(

    <div className="pagina-home">
      <div class ="container">
    <img src={imageLogo} width="320" height="205" alt='logo da aplicação' />
    </div>
   <div id="texto-login">
   <Link class="nav-login" to="/login">Login</Link>
   </div>
   </div>
  
  );
};

export default UsuarioLogin;

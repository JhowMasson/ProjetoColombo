import React from 'react';
import './Colombo_home.css';
import imageLogo from "../../assets/imagens/logoColombo.png";
import SidebarMenu from "../../components/Sidebar/Sidebar";


const PaginaColombo = () => { 
  return(


    <div className="home-colombo">
    <SidebarMenu>
      <h1>Seja Bem-Vindo</h1>
      <div class ="container">
    <img src={imageLogo} width="320" height="205" alt='logo da aplicação' />
    </div>
    </SidebarMenu>
   </div>
  
  );
};

export default PaginaColombo;

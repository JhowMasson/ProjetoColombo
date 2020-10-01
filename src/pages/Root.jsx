import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import RecuperarSenha from 'components/User/Login/Recuperar_senha';
import ColomboHome from './Colombo_home/Colombo_home';

const PaginaRoot = () => (
  <Router>
    <Switch>
      <Route path="/colombo_home" component={ColomboHome}/>
      <Route path="/recuperar_senha" component={RecuperarSenha}/>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)

export default PaginaRoot;

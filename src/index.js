import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './paginas/principal/home';
import Contacto from './paginas/contacto/contacto';
import Quienessomos from './paginas/quienessomos/quienessomos';
import Error from './paginas/error/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
  <App />

  <Router basename={process.env.PUBLIC_URL}>
  <Switch>

  <Route path="/home">
  <Home />
  </Route>
  <Route exact path="/" component={Home}/>

  <Route path="/quienessomos">
  <Quienessomos />
  </Route>

  <Route path="/contacto">
  <Contacto />
  </Route>

  <Route path="*">
   <Error />
  </Route>
  
 

  </Switch> 
    </Router>
  

  </React.StrictMode>,
  document.getElementById('root')
);



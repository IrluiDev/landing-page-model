import React from 'react';
import Menu from '../components/Menu2';
import Carrusel from '../components/Carrusel';
import Home from '../components/Home'
import Contacto from '../components/Contacto'
import Servicios from '../components/Servicios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/* import '../css/App.css' */
import '../css/Menu.css'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Carrusel />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/contacto">
              <Contacto />
            </Route>

            <Route path="/servicios">
              <Servicios />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

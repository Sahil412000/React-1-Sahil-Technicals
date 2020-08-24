import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Navb from './components/NavbarComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './components/AboutComponent';
import Services from './components/ServicesComponent';
import Contact from './components/ContactComponent';


function App() {
  return (
    <div>
      <Navb/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to ="/"/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import Footer from './Footer.js';
import './App.css';
import {Route,BrowserRouter as Router } from 'react-router-dom';
import Prva from './components/Prva.js';
import Druga from './components/Druga';
import Treca from './components/Treca';
import Cetvrta from './components/Cetvrta';
import Peta from './components/Peta';
import Header from './Header.js';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Route exact path="/"component={Prva}></Route>
        <Route path="/druga"component={Druga}></Route>
        <Route path="/treca"component={Treca}></Route>
        <Route path="/cetvrta"component={Cetvrta}></Route>
        <Route path="/peta"component={Peta}></Route>
        

      </Router>

      <Footer></Footer>
    </div>
        
  );
}

export default App;


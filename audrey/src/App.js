import React from 'react';
import Footer from './Footer.js';
import './App.css';
import {Route,BrowserRouter as Router } from 'react-router-dom';
import Prva from './components/Prva.js';
import Druga from './components/Druga';
import Treca from './components/Treca';

function App() {
  return (
    <div>
      <Footer></Footer>

      <Router>
        <Route exact path="/"component={Prva}></Route>
        <Route path="/druga"component={Druga}></Route>
        <Route path="/treca"component={Treca}></Route>
      </Router>
    </div>
        
  );
}


export default App;
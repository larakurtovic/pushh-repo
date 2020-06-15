import React from 'react';
import {Link} from 'react-router-dom';
import pocetna from '../pocetna.jpg';

function Prva() {
    return (
      <div>
         
          <a href="https://www.gloria.hr/arhiva/povodom-85.-rodendana-audrey-hepburn-rijetke-fotografije-i-najbolji-citati/4878341/"><img src= {pocetna}></img></a><br></br>

          <Link to='/druga'>Rani život </Link>
          <Link to='/treca'>Filmski život</Link><br></br><br></br>
          <Link to='/cetvrta'>Život prije smrti</Link>
          <Link to='/peta'>Rezervacija</Link><br></br><br></br><br></br>

      </div>
    );
  }
  
  
  export default Prva;



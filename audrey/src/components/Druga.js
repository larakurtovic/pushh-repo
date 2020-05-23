import React from 'react';
import {Link} from 'react-router-dom';
import audreyy from '../audreyy.jpg';
import aaudrey from '../aaudrey.jpg';
import '../App.css';

function Druga() {
    return (
      <div classname="druga">
        <img src={audreyy}></img>
        <img src={aaudrey}></img><br></br>
        <Link to="/">nazad</Link>



      </div>
    );
  }
  
  
  export default Druga;

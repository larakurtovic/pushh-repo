import React from 'react';
import {Link} from 'react-router-dom';
import audrey from '../audrey.jpg';

function Prva() {
    return (
      <div>
         
          <img src= {audrey}></img><br></br>
          <Link to='/druga'>odvedi me na drugu </Link><br></br>
          <Link to='/treca'>odvedi me na trecu </Link>

      </div>
    );
  }
  
  
  export default Prva;



import React from 'react';
import {Link} from 'react-router-dom';
import treca from '../treca.jpg';
import trecaa from '../trecaa.png';

function Druga() {
    return (
      <div>

        <Link to='/treca'><img src= {treca}></img></Link>
      

        <Link to='/treca'><img src= {trecaa}></img></Link> <br></br> <br></br>

        <p>
       Rođena je kao Audrey Kathleen Ruston u Belgiji 4. svibnja 1929.<br></br> Bila je filmska i kazališna glumica, manekenka i humanitarka.<br></br>
       Otac (Joseph Victor Anthony Ruston) joj je bio irski bankar, <br></br>a majka (Ella van Heemstra) pripadnica nizozemske aristokracije.<br></br>
       Audreyin je otac tek kasnije svojem prezimenu dodao Hepburn.<br></br> Imala je dva polubrata iz majčinog prvog braka s nizozemskim plemićem.  

           </p> <br></br><br></br><br></br>

         
          

        <Link to="/">povratak na početnu</Link>  <br></br><br></br><br></br>


      </div>
    );
  }
  
  
  export default Druga;




import React from 'react';
import {Link} from 'react-router-dom';
import old from '../old.jpg';
import oldd from '../oldd.jpg';

function Cetvrta() {
    return (
      <div>

        <img src= {old}></img>
        <img src= {oldd}></img><br></br>

        <p>Zbog svojih je iskustava tijekom 2. svjetskog rata odlučila ostatak 
        svog života posvetiti pomaganju djeci iz najsiromašnijih zemalja i postala<br></br> veleposlanicom UNICEF-a za što dobila
        i nagrade. Neumorno je radila za UNICEF čak i u posljednjim mjesecima svog života.<br></br> 1992. je 
        počela osjećati bol u trbuhu za koju se ispostavilo da je posljedica rijetke vrste raka slijepog crijeva. Rak se i nakon operacije nastavio širiti.
        Preminula je 20. siječnja 1993. 
        </p> <br></br>

        <Link to="/">povratak na početnu</Link> <br></br><br></br><br></br>


      </div>
    );
  }
  
  
  export default Cetvrta;
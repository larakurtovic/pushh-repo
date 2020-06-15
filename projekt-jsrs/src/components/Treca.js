import React from 'react';
import {Link} from 'react-router-dom';
import cetvrtaa from '../cetvrtaa.jpg';
import dva from '../dva.jpg';

function Treca() {
    return (
      <div>

      <Link to='/cetvrta'><img src= {cetvrtaa}></img></Link>
      <Link to='/cetvrta'><img src= {dva}></img></Link><br></br> <br></br>

        <p>
          
          Audrey i njezina majka su se preselile u Lonon nakon rata i to je bilo vrijeme kada je učila <br></br>plesati balet, radila kao model i počela glumiti u filmovima
          prvenstveno zbog zarade. <br></br> Ponuđena joj je uloga u filmu Praznik u Rimu koji ju je, kako ona kaže, učinio zvijezdom.<br></br>
          1953. godine je osvojila Oscara za najbolju glumicu. <br></br> Bila je jedna od najpopularnijih glumica Hollywooda, glumila je u filmovima s drgim velikim glumcima<br></br> koji su 
          se zbližili s njom. Nakon petnaest uspješnih godina u filmskom svijetu je samo povremeno glumila.
          
        </p><br></br>
        <p><b>Ako želite saznati u kojim je sve filmovima glumila kliknite link ispod:</b></p><br></br>

        <a href="https://www.imdb.com/name/nm0000030/">Audrey Hepburn filmovi</a>

        <br></br><br></br><br></br>

        <Link to="/">povratak na početnu</Link> 

      </div>
    );
  }
  
  
  export default Treca;


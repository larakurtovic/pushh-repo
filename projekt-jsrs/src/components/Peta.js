import React, { Component } from "react";
import {Link} from 'react-router-dom';
import '../App.css';

export class Peta extends Component{ 
      state={
        Ime:'',
        Prezime:'',
        Mail:'',
        Lozinka:'',

      }
      onSubmit= e =>{e.preventDefault(); alert("Rezervirano"); console.log("Uspješno rezervirano", this.state.ime);}
      render()
      
    {
      return(
      <div>
        <h1 class="haha">Rezerviraj put na mjesto snimanja filma Breakfast at Tiffany's {this.state.ime}</h1>
      <form action = "/Sesta">
        <input placeholder='Ime' vlaue={this.state.ime} onChange={e=>this.setState({ime: e.target.vlaue})}></input>
        <input placeholder='Prezime' vlaue={this.state.prezime} onChange={e=>this.setState({prezime: e.target.vlaue})}></input> <br></br>
        <input placeholder='Mail' vlaue={this.state.prezime} onChange={e=>this.setState({prezime: e.target.vlaue})}></input>
        <input placeholder='Lozinka' vlaue={this.state.lozinka} onChange={e=>this.setState({lozinka: e.target.vlaue})}></input> <br></br> <br></br>
        <button onClick={e=>this.onSubmit(e)}>Potvrdi</button>
        
      </form>
      <br></br><br></br><br></br>

      <Link to="/">povratak na početnu</Link> <br></br><br></br>



      </div>
      );
    } 
  }
  
  
  export default Peta;
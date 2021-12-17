
import './App.css';
import Accueil from './Components/Accueil/Accueil';
import React from 'react'
import Navbar from "../src/Components/Navbar/Navbar"
import Services from "../src/Components/Services/Services"
import Apropos from "./Components/Apropos/Apropos"
import Contacter from "../src/Components/Contacter/contacter"
import Creerprofil from "../src/Components/Creerprofil/Creerprofil";
import Liste from"../src/Components/Liste/Liste"
import Footer from "../src/Components/Footer/footer"
import {BrowserRouter as Router,Route, Switch,Link, NavLink} from "react-router-dom";




function App() {
  return <div>
   

    
    <Router>
      <header>
      <Navbar />
    </header>
     
    <Switch>
    <Route path="/" exact component={Accueil}/> 
    {/* <Route path="/Services" exact component={Services}/> */}
    <Route path="/Apropos" exact component={Apropos}/>
    <Route path="/Liste" exact component ={Liste}/>
    {/* <Route path="/Contacter" exact component={Contacter}/> */}
    <Route path="/Creerprofil" exact component={Creerprofil}/>
    

  
     <Footer path="/Footer" exact component={Footer} />
 </Switch> 
  
  <Footer/>
  </Router>

  </div>
}

export default App;

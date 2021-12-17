import React from "react";

import { NavLink as Link } from "react-router-dom";

import "./Navbar.css";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  // const[navbarr,setNavbarr]=useState(false);
  // const[linkk,setLinkk]=useState(false)

  // const changeLink=()=>{
  //   if(window.scrollY>=50){

  //     setLinkk(true)
  //   }else{

  //     setLinkk(false)
  //   }

  // }
  // const changeBackground=()=>{
  //   if(window.scrollY>=80){
  //     setNavbarr(true)

  //   }else{
  //     setNavbarr(false)

  //   }

  // }
  // window.addEventListener('scroll',changeBackground)

  const history = useHistory();

  const handleRoute = () => {
    history.push("/Creerprofil");
  };

  return (
    <nav className="navbarr">
      <div className="linkss">
        <ul className="mennu">
          <li className="enav">
            {" "}
            <Link className="linkk" to="/">
              {" "}
              Accueil
            </Link>
          </li>
          <li className="enav">
            {" "}
            <Link className="linkk" to="/Apropos">
              {" "}
              A propos
            </Link>
          </li>
          <li className="enav">
            {" "}
            <Link className="linkk" to="/Liste">
              Services
            </Link>
          </li>

          {/* <Link className="linkk" to="/Services">Services</Link> */}
          {/* <li className="enav" >  <Link  className="linkk"to ="/Contacter">Contacter </Link></li> */}
          {/* <li className="enav" > <Link className="linkk" to ="/Creerprofil">creer un profil</Link> </li> */}

          <button className="annonce" onClick={handleRoute}>
            Créer une annonce
          </button>
        </ul>
      </div>
    </nav>
  );
}

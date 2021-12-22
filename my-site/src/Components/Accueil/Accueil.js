import React from "react";
import Service from "../Services/Service/Service";
import "./Accueil.css";
import background from "../../images/hands.jpg";
import Navbar from "../Navbar/Navbar";

import Apropos from "../Apropos/Apropos";
import Contacter from "../Contacter/contacter";
import Creerprofil from "../Creerprofil/Creerprofil";
import Liste from "../Liste/Liste";
import Card from "@mui/material/Card";
import Footer from "../Footer/footer";
import { BsArrowRightCircle } from "react-icons/bs";
import image1 from "../../images/mop.png";
import image2 from "../../images/care.png";
import image3 from "../../images/children.png";
import image4 from "../../images/couple.png";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
function Accueil() {
  // const [style, setStyle] = useState("inputt");

  // const changeStyle = () => {

  //   setStyle("inputt2");
  // };

  return (
    <div>
      {/* <BsArrowRightCircle  className="arr1" size="25px"/> */}
      <div className="principale">
        <div className="card">
          {/* <h2>
            Trouvez votre garde d’enfant, aide à domicile, ou une aide ménagère
            selon vos besoins
          </h2> */}

          <span className="Titre">
            Trouvez une garde d’enfant, aide à domicile, ou une aide ménagère
          </span>
          <h6>
            Faites-vous aider, maîtrisez votre budget et retrouvez du temps pour
            l'essentiel.
          </h6>
          <nav className="navigation">
            <ul className="choix">
              <div className="block1">
                <li className="menage">
                  {" "}
                  <img src={image1} />
                  <Link id="l" to="/Aidemenagère">
                    Aide ménagère{" "}
                  </Link>
                </li>
                <li className="compagnie">
                  <img src={image4} />
                  <Link id="l" to="/Auxiliare">
                    {" "}
                    Auxiliare de vie
                  </Link>
                </li>
              </div>
              <div className="block2">
                <li className="enfants">
                  {" "}
                  <img src={image3} />
                  <Link id="l" to="/Gardeenfant">
                    {" "}
                    Garde enfants{" "}
                  </Link>
                </li>
                <li className="handicapés">
                  <img src={image2} />

                  <Link id="l" to="/Assistant">
                    Assistant handicapés{" "}
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        {/* <div className="jetrouve">
          <input
            className="inputt"
            placeholder="Wilaya  ou nom de service"
            // onClick={changeStyle}
          ></input>
          <button className="btnjetrouve">Je trouve !</button>
        </div> */}
      </div>
      <div className="sousAccueil">
        <span>UNE PLATEFORME SIMPLE POUR TROUVER UNE AIDE RAPIDEMENT</span>
      </div>
    </div>
  );
}

export default Accueil;

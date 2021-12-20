import React from "react";
import "./apropos.css";

function apropos() {
  return (
    <div className="allapropos">
      <div className="apropos">
        <div>
          <h2 className="titre">A propos de nous</h2>
        </div>
        <div className="paragraphe">
          <p>
            {" "}
            Trouvez les personnes idéales pour prendre soin de vous ou de vos
            proches pour une meilleure autonomie à domicile en simple clics, qui
            assurent leur bien-être pour tous les petits gestes du quotidien :
            aide au lever, aide au repas, aux courses, déplacements en
            pharmacie,faires les differents taches de ménages. differents
            services sont disponible dans notre site, vous trouverez:
          </p>
        </div>
        <div className="imageetservices">
          <div className="elmts">
            <li className="elmt">
              {" "}
              Une personnes de compagnie Pour Les Taches du quotidien
            </li>

            <li className="elmt"> Une femme de ménage de confiance </li>

            <li className="elmt">
              {" "}
              Une garde enfants de confiance pour vos petits
            </li>

            <li className="elmt">
              {" "}
              Aide pour les peronnes handicapés neccesitant des aides
              specifiques
            </li>
          </div>
          <div className="imageapropos"></div>
        </div>
      </div>
    </div>
  );
}

export default apropos;

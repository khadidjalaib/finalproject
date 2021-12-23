import React from "react";
import "./service.css";
import { getServices } from "../../../actions/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";
const Service = ({ service }) => {
  const history = useHistory();
  const openService = (e) => {
    history.push(`/Liste/${service._id}`);
  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getServices());
  // }, [dispatch]);

  return (
    <div className="cardd">
      <article className="contenu">
        <div className="leftside">
          <img className="image" src={service.photo} />

          <div className="infos">
            <span className="age">{service.Age} ans</span>
            <div className="wilaya">
              <span>{service.wilaya}</span>
            </div>
          </div>
        </div>
        <div className="rightside">
          <span className="nomService">{service.nom}</span>
          <span className="pprenom">{service.prenom}</span>
          <br></br>
          <span className="Prenom">{service.nomService}</span>
          <div className="desc">
            <p className="Description">{service.description}</p>
          </div>
          {/* <button onClick={openService}>details</button> */}
        </div>
      </article>
    </div>
  );
};

export default Service;

import React from "react";
import "./service.css";
import { getServices } from "../../../actions/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "react-loading-skeleton/dist/skeleton.css";
import nophoto from "../../../images/profile.png";
const Service = ({ service }) => {
  const history = useHistory();
  const openService = (e) => {
    history.push(`/Liste/${service._id}`);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="cardd" onClick={openService}>
      <article className="contenu">
        <div className="leftside">
          <img className="image" src={service.photo || nophoto} />

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
        </div>
      </article>
    </div>
  );
};

export default Service;

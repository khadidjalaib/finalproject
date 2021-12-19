import React from "react";
import "./service.css";
import { getServices } from "../../../actions/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";
const Service = ({ service }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="cardd">
      <article className="contenu">
        <div className="leftside">
          <img
            className="image"
            src={service.photo || "../../images/hands-comfort.jpg"}
          />

          <div className="infos">
            <span className="Prenom">{service.prenom}</span>
            <span className="age">{service.Age} ans</span>
          </div>
        </div>
        <div className="rightside">
          <span className="nomService">{service.nomService}</span>
          <div className="desc">
            <p className="Description">{service.description}</p>
          </div>

          <div className="wilaya">
            <span>{service.wilaya}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Service;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

import { getService } from "../../actions/services";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getService(id));
    console.log(services);
  }, [id]);

  return (
    <>
      <div className="detaillls">
        <div className="photosection">
          {services && <img className="pict" src={services[0].photo} />}
        </div>
        {services && <div className="nomsection">{services[0].prenom}</div>}
        {services && <div>{services[0].nomService}</div>}
        {services && <div>{services[0].Age}</div>}
        {services && <div>{services[0].wilaya}</div>}
        {services && <div>{services[0].description}</div>}
      </div>
    </>
  );
};
export default ServiceDetails;

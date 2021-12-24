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
    <div className="generale">
      <div className="detaillls">
        {/* <div id="titre">iformations sur l'annonce</div> */}
        <div className="up">
          <div className="photosection">
            {services && <img className="pict" src={services[0].photo} />}
          </div>
          {services && <div className="nomsection">{services[0].prenom}</div>}
          {services && <div id="servicesection">{services[0].nomService}</div>}
          {services && <div id="agesection">{services[0].Age} ans</div>}

          <div className="par">
            <div id="dc">{/* <span>Description</span> */}</div>
            {services && <> {services[0].description}</>}
          </div>
          <div id="phone">
            <div>
              <i className="fa fa-phone"></i>
            </div>
            {services && <div id="item">{services[0].tél}</div>}
          </div>
          <div id="location">
            <div>
              <i className="fa fa-map-marker"></i>
            </div>
            {services && <div id="item">{services[0].wilaya}</div>}
          </div>
          <>{services && <div id="item">{services[0].email}</div>}</>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;

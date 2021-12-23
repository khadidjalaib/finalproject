import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

import { getService } from "../../actions/services";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { service, services } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  return <div className="details">{service.nomService}</div>;
}

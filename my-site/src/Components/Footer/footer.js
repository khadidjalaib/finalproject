import React from "react";
import "./footer.css";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Alger</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>055555555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a>service.dom@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Apropos de nous</span>
            Une plateforme pour vous aidez a trouver une aide à domicile en
            simple clics
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;

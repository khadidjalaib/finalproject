import React from "react";
import { getServices } from "../../actions/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "./liste.css";
import Service from "../Services/Service/Service";
import { useSelector } from "react-redux";

import SkeletonCard from "../Services/Service/SkeletonCard.js";
import SkeletonFilter from "../Services/Service/SkeletonFilter.js";

const Liste = (service) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectTerm, setSelectTerm] = useState("");
  const services = useSelector((state) => state.services);
  console.log(services);

  const dispatch = useDispatch();

  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      dispatch(getServices());
      SetLoading(false);
    }, 3000);
  }, [dispatch]);

  return (
    <div>
      <div className="principalle">
        <div className="haut">
          <div className="titrehaut">
            <p className="T">
              {" "}
              Services à la personne disponibles près de chez vous
            </p>
          </div>
        </div>
        <div className="bas">
          <>
            {Loading ? (
              <SkeletonFilter />
            ) : (
              <div className="filtrer">
                <div className="titrefiltre">Filtrer vos recherces:</div>
                <div className="filtreElement">
                  <label className="labell">Service</label>
                  {/* <input className="filtreinput"  type="text" name="search" placeholder="entrer le service"value=""/>
                    <i className="fas fa-search"></i> */}
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="search"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="filtreElement">
                  <label className="labell">Region</label>
                  <select
                    className="filtreinput"
                    placeholder="choisir la region"
                    onChange={(e) => {
                      setSelectTerm(e.target.value);
                    }}
                  >
                    <option selected value="coconut">
                      selectioner la region
                    </option>
                    <option value="Alger">Alger</option>
                    <option value="Oran">Oran</option>

                    <option value="Bejaia">Bejaia</option>

                    <option value="Bejaia">Bejaia</option>

                    <option value="Sétif">Sétif</option>

                    <option value="Annaba">Annaba</option>
                  </select>
                </div>
                <div className="filtreElement">
                  <label className="labell">Age</label>
                  <input
                    className="filtreinput"
                    type="text"
                    name="search"
                    placeholder="entrer l'age"
                    value=""
                  />
                </div>

                <div className="filtreElement">
                  <label className="labell">Genre</label>
                  <input
                    className="filtreinput"
                    type="text"
                    name="search"
                    placeholder="choisir le genre"
                    value=""
                  ></input>
                </div>
              </div>
            )}
          </>
          <div className="lista">
            {services
              .filter((service) => {
                if (searchTerm == "") {
                  return service;
                } else if (
                  service.nomService
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return service;
                }
              })
              .map((service) => (
                <>
                  {Loading ? (
                    <SkeletonCard />
                  ) : (
                    <Service service={service}></Service>
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liste;

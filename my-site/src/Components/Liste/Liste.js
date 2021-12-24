import React from "react";
import { getServices } from "../../actions/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import "./liste.css";
import Service from "../Services/Service/Service";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import SkeletonCard from "../Services/Service/SkeletonCard.js";
import SkeletonFilter from "../Services/Service/SkeletonFilter.js";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
// import useStyles from "./styles";
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
const Liste = (service) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionTerm, setRegionTerm] = useState("");
  const [ageTerm, setAgeTerm] = useState("");
  const [genreTerm, setgenreTerm] = useState("");

  const services = useSelector((state) => state.services);
  console.log(services);
  // const classes = useStyles();
  // const query = useQuery();
  // const page = query.get("page") || 1;
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
                      setRegionTerm(e.target.value);
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
                    type="number"
                    name="search"
                    placeholder="entrer l'age"
                    onChange={(e) => {
                      setAgeTerm(+e.target.value);
                    }}
                  />
                </div>

                {/* <div className="filtreElement">
                  <label className="labell">Genre</label>
                  <select
                    className="filtreinput"
                    type="text"
                    name="search"
                    placeholder="choisir le genre"
                    value=""
                    onChange={(e) => {
                      setgenreTerm(e.target.value);
                    }}
                  >
                    <option selected value="coconut">
                      selectioner le genre
                    </option>
                    <option value="Femme">Femme</option>
                    <option value="Homme">Homme</option>
                  </select>
                </div> */}
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
              .filter((service) => {
                if (ageTerm == "") {
                  return service;
                } else if (service.Age == ageTerm) {
                  return service;
                }
              })
              .filter((service) => {
                if (regionTerm == "") {
                  return service;
                } else if (service.wilaya == regionTerm) {
                  return service;
                }
              })
              .filter((service) => {
                if (genreTerm == "") {
                  return service;
                } else if (service.genre == genreTerm) {
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
        {/* 
        <Paper className={classes.pagination} elevation={6}>
          <Pagination page={page} />
        </Paper> */}
      </div>
    </div>
  );
};

export default Liste;

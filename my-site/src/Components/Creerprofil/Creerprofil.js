import React from "react";
import "./Creerprofil.css";
import { useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createService } from "../../actions/services";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
function Creerprofil() {
  const [serviceData, setServiceData] = useState({
    nomService: "",
    description: "",
    nom: "",
    prenom: "",
    Age: "",
    photo: "",
    wilaya: "",
    tél: "",
  });
  const dispatch = useDispatch();

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createService(serviceData));
    history.push("/Liste");
  };

  const clear = () => {};

  // const handleRoute = () => {
  //   history.push("/Liste");
  // };
  return (
    <div className="all">
      <div className="thetop"></div>
      <div className="container">
        <div className="title">Inscription</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Nom</span>
                <input
                  type="text"
                  placeholder="Entrez votre nom"
                  required
                  value={serviceData.nom}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, nom: e.target.value })
                  }
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Prenom</span>
                <input
                  type="text"
                  placeholder="Entrez votre prénom"
                  required
                  value={serviceData.prenom}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, prenom: e.target.value })
                  }
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Entrez votre email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Téléphone</span>
                <input
                  type="text"
                  placeholder="Entrez votre téléphone"
                  required
                  value={serviceData.tél}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, tél: e.target.value })
                  }
                ></input>
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input
                  type="text"
                  placeholder="Entrez votre age"
                  required
                  value={serviceData.Age}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, Age: e.target.value })
                  }
                ></input>
              </div>

              <div className="input-box">
                <span className="details">Genre</span>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" required>
                    choisir{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value={10}>Femme</MenuItem>
                    <MenuItem value={20}>Homme</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="input-box">
                <span className="details">Service</span>
                <FormControl fullWidth>
                  <InputLabel
                    type="text"
                    id="demo-simple-select-label"
                    required
                  >
                    choisir le service
                  </InputLabel>
                  <Select
                    value={serviceData.nomService}
                    onChange={(e) =>
                      setServiceData({
                        ...serviceData,
                        nomService: e.target.value,
                      })
                    }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value="Garde enfant">Garde enfant</MenuItem>
                    <MenuItem value="Auxiliare de vie">
                      Auxiliare de vie
                    </MenuItem>
                    <MenuItem value="assistant pour handicapés">
                      assistant pour handicapés
                    </MenuItem>
                    <MenuItem value="Aide ménagere">Aide ménagere</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="input-box">
                <span className="details">Wilaya</span>
                <FormControl fullWidth>
                  <InputLabel
                    type="text"
                    id="demo-simple-select-label"
                    required
                  >
                    choisir la wilaya
                  </InputLabel>
                  <Select
                    value={serviceData.wilaya}
                    onChange={(e) =>
                      setServiceData({ ...serviceData, wilaya: e.target.value })
                    }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem value="Alger">Alger</MenuItem>
                    <MenuItem value="Bejaia">Bejaia</MenuItem>
                    <MenuItem value="Oran">Oran</MenuItem>
                    <MenuItem value="setif">setif</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="text-message">
                <span className="details">Message</span>
                <textarea
                  className="textt"
                  type="textarea"
                  maxlength="400"
                  value={serviceData.description}
                  onChange={(e) =>
                    setServiceData({
                      ...serviceData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Entrez votre message"
                  required
                ></textarea>
              </div>
            </div>

            <div className="phprofile">
              <label for="file"></label>
              <FileBase
                className="filebasee"
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setServiceData({ ...serviceData, photo: base64 })
                }
              />
            </div>

            <div className="button">
              <input type="submit" value="Confirmer"></input>

              <div>
                {/* <button className="clear" onClick={clear}>
                  clear
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Creerprofil;

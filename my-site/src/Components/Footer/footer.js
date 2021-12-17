import React from 'react'
 import"./footer.css"
 import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
 import LocationOnIcon from '@material-ui/icons/LocationOn';


const footer = () => {
   
    return (
        <div>
          <footer> 
           <div className="left">
     
     
          DES SERVICES VARIÉS POUR RÉPONDRE À TOUS VOS BESOINS

          </div>
          <div className="aide">
           
          Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter
           <div className="appel">
          <LocalPhoneIcon > </LocalPhoneIcon><span className="phone"> 0555 55 55 22</span>
         </div>
         <div className="location">
         <LocationOnIcon></LocationOnIcon> Alger
         </div>
          </div>
             
          </footer>

        </div>
    )
}

export default footer

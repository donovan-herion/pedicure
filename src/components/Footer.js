import React from "react";
import logo_green from "../images/logo_green.png";

function Footer() {
  return (
    <footer>
      <img src={logo_green} alt="" />
      <div className="infos">
        <div className="left">
          <p>maman</p>
          <p>pedicure</p>
        </div>
        <div className="right">
          <p>maman</p>
          <p>pedicure</p>
        </div>
      </div>
      <div class="bottom-line bg-dark text-center text-secondary py-3">
        PediDerm © 2020 Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;

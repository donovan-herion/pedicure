import React from "react";
import logo_green from "../images/logo_green.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo_green} alt="logo" class="logo" />
        {/* <ul>
          <li>Services</li>
          <li>Prix</li>
          <li>Contact</li>
        </ul> */}
      </nav>
      <div class="background">
        <h2>
          Nous faisons de petites choses
          <span>avec beaucoup d'amour</span>
        </h2>
        <a href="#services">Plus d'informations</a>
      </div>
    </header>
  );
}

export default Header;

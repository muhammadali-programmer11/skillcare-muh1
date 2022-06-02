import React from "react";
import "./Header2.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <nav>
      <div class="topnav" id="myTopnav">
        <ul>
          <li>
            <a href="#home" className="active">
              Menu
            </a>
          </li>
          <li>
            <a href="/#news">News</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#instructor">Instructor</a>
          </li>
        </ul>
        <a href="/#ham" className="icon" onClick={myFunction}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
}

export default Header;

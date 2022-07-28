import React from "react";
import '../App.css';

const logo = "/images/AppStreak.jpg";
const customStyle = { width: "40%", height: "40%" };
function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand " href="#">
          <img
            src={logo}
            alt="logo"
            style={customStyle}
            className="d-inline-block align-text-center"
          ></img>
          My Fav Foods
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
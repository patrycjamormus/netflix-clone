import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
const [show, handleShow] = useState (false);

useEffect (() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null );
    };
}, []);

/*funkcja window okresla kiedy pasek z przezroczystego ma sie zmienic na czarny*/


  return (
    <div className={`nav ${show && "nav_black"}`}> {/*zawsze nav ale jesli show jest true to czasowo zamien to na nav_black */}
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;

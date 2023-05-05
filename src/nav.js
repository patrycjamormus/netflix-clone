import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {


useEffect (() => {
    
}, []);


  return (
    <div className={`nav`}> {/*zawsze nav ale jesli show jest true to czasowo zamien to na nav_black */}
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

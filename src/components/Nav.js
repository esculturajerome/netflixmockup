import React, { useEffect } from "react";

import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav__logo" src="/junix.svg" alt="Netflix logo" />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="Avatar logo"
      />
    </div>
  );
}

export default Nav;

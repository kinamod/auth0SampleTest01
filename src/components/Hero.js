import React from "react";

import logo from "../assets/wraplogo.svg";

const Hero = () => (
  <div className="text-center hero my-5" >
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Wrap.org.uk</h1>

    <p className="lead">
      Making the world a more sustainable place
    </p>
  </div>
);

export default Hero;

import React from "react";

import logo from "../assets/wraplogo.svg";

const Hero = () => (
  <div className="text-center hero my-5" style={{ 
      backgroundImage: `url("https://wrap.org.uk/sites/default/files/styles/crop_image_style_4_1/public/2022-04/homepage-tree-sea-beach-banner-2000x647.jpg")` 
    }}>
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Wrap.org.uk</h1>

    <p className="lead">
      Making the world a more sustainable place</a>
    </p>
  </div>
);

export default Hero;

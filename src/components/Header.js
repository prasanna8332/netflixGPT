import React from "react";
import { NETFLIX_LOGO } from "../utilities/constants";

const Header = () => {
  return (
    <div className="absolute w-44 p-1 bg-gradient-to-b from-black">
      <img src={NETFLIX_LOGO} />
    </div>
  );
};

export default Header;

import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utilities/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase.config";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-44 p-1 bg-gradient-to-b from-black flex space-between">
      <img src={NETFLIX_LOGO} alt="" />
      <span>log out</span>
    </div>
  );
};

export default Header;

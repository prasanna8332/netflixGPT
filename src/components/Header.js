import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utilities/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDisplayName, updateEmail } from "../slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
        disptach(updateDisplayName(user.displayName));
        disptach(updateEmail(user.email));
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const signOutTheUser = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {}
  };

  window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > 0) {
      header.classList.remove("bg-black");
      header.classList.add("bg-transparent");
    } else {
      header.classList.remove("bg-transparent");
      header.classList.add("bg-black");
    }
  });

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 w-full px-6 md:px-12 flex justify-between items-center z-20 bg-black bg-gradient-to-b from-black ease-in duration-300"
      >
        <img className="w-44 p-1 h-20" src={NETFLIX_LOGO} alt="Netflix Logo" />
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="#" className=" text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className=" text-white hover:text-gray-300">
                My List
              </a>
            </li>
            <button
              type="button"
              onClick={signOutTheUser}
              className="text-white bg-red-700 float-right hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              log out
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;

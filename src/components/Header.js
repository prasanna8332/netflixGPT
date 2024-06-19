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

  return (
    // <div className="fixed flex justify-between w-full bg-gradient-to-b from-black">
    <div className="fixed flex justify-between w-full bg-black">
      <img className="w-44 p-1" src={NETFLIX_LOGO} alt="" />
      <button
        type="button"
        onClick={signOutTheUser}
        className="text-white bg-red-700 float-right hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        log out
      </button>
    </div>
  );
};
export default Header;

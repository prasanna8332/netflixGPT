import React, { useState } from "react";
import { NETFLIX_BACKGROUND } from "../utilities/constants";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utilities/firebase.config";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { updateDisplayName, updateEmail } from "../slices/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState("Sign in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const navigate = useNavigate();
  const disptach = useDispatch();

  const handleSignInClick = () => {
    const signInText = signIn === "Sign up" ? "Sign in" : "Sign up";
    setSignIn(signInText);
  };

  const handleActionButton = () => {
    if (signIn === "Sign up") {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        // const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            handleSignInClick();
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        console.log(error);
        seterrorMessage("Email id is already in use");
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        disptach(updateDisplayName(user.displayName));
        disptach(updateEmail(user.email));
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Header />
      <img
        className="absolute -z-10 object-cover w-full h-full"
        src={NETFLIX_BACKGROUND}
        alt=""
      />

      <div className="container px-4 mx-auto flex justify-center items-center h-screen">
        <div className="max-w-lg mx-auto bg-black opacity-90 p-9">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Sign in
            </h2>
          </div>

          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold text-white">
                Email
              </label>

              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-white-900 bg-white shadow border-2 border-white-900 rounded"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {signIn === "Sign up" && (
              <div className="mb-6">
                <label className="block mb-2 font-extrabold text-white">
                  Full name
                </label>

                <input
                  onChange={(e) => setName(e.target.value)}
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-white-900 bg-white shadow border-2 border-white-900 rounded"
                  type="text"
                  placeholder="Enter Full name"
                />
              </div>
            )}

            <div className="mb-6">
              <label className="block mb-2 font-extrabold text-white">
                Password
              </label>

              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-white-900 bg-white shadow border-2 border-white-900 rounded"
                type="password"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label>
                  <input type="checkbox" />

                  <span className="ml-1 font-extrabold text-white">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="w-full lg:w-auto px-4">
                <p className="inline-block text-white font-extrabold hover:underline">
                  Forgot your password?
                </p>
              </div>
            </div>

            <p className="text-red-500 font-bold text-lg py-2">
              {errorMessage}
            </p>

            <button
              onClick={handleActionButton}
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-red-800 hover:bg-red-900 border-3 border-red-900 shadow rounded transition duration-200"
            >
              {signIn}
            </button>

            {signIn === "Sign in" && (
              <p className="text-center font-extrabold text-white ">
                Don't have an account ?
                <span
                  onClick={handleSignInClick}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Sign up
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

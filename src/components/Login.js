import React, { useState } from "react";

import { NETFLIX_BACKGROUND } from "../utilities/constants";

const Login = () => {
  const [signIn, setSignIn] = useState("Sign in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    const signInText = signIn === "Sign up" ? "Sign in" : "Sign up";

    setSignIn(signInText);
  };

  const handleActionButton = () => {
    console.log(email, password);
  };

  return (
    <div>
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
                <p className="inline-block font-extrabold hover:underline">
                  Forgot your password?
                </p>
              </div>
            </div>

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

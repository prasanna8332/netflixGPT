import React from "react";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";

const Browse = () => {
  return (
    <>
      <Header />
      <div className="relative bg-black">
        <PrimaryContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;

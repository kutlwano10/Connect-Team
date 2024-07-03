import React from "react";
import profileImg from "../assets/img.jpg";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <>
      <Link to="/profileInfo">
        <div className="flex bg-white  shadow-md mt-4 gap-2  rounded-3xl mx-3 p-2">
          <div className="w-16 h-16">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={profileImg}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold">Kealeboga Ramokoka</h1>
            <p>Sofware Dev | Content Creator</p>
          </div>
        </div>
      </Link>
      
    </>
  );
};

export default Profiles;

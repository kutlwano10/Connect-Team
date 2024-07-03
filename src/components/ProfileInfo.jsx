import React from "react";
import background from "../assets/background.jpg";
import profileImg from "../assets/img.jpg";

const ProfileInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full w-4xl">
        <div className="relative">
          <img
            className="w-full h-36 object-cover"
            src={background}
            alt="Background"
          />
          <div className="absolute top-24 left-4">
            <img
              className="rounded-full w-32 h-32 border-4 border-white object-cover"
              src={profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
